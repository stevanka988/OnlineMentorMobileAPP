import { AsyncStorage, Platform } from 'react-native';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import ApiService from './ApiService';
import config from '../config';
// import { askForNotificationsPermission } from '../services/PermissionsService';
// import notificationService from './NotificationService';
import { OS_TYPES } from '../constants';

const {
  ANDROID_GOOGLE_CLIENT_ID,
  IOS_GOOGLE_CLIENT_ID,
  FACEBOOK_APP_ID
} = config;

const { CLIENT_ID } = config;

const ENDPOINTS = {
  LOGIN: '/login',
  SIGN_UP: '/register',
  DETAILS: '/details',
  LOGOUT: '/auth/logout',
  FACEBOOK: '/auth/social/facebook',
  GOOGLE: '/auth/social/google',
  FORGOT_PASSWORD: '/resetPassword',
  RESET_PASSWORD: '/user/reset-password'
};

class AuthService extends ApiService {
  constructor() {
    super();
    this.init();
  }

  init = async () => {
    const token = this.getToken();
    const user = this.getUser();
    // AsyncStorage.clear();

    if (token && user) {
      await this.setAuthorizationHeader();
      this.api.setUnauthorizedCallback(this.destroySession.bind(this));
    }
  };

  setAuthorizationHeader = async () => {
    const token = await this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`
      });
    }

    this.api.attachHeaders({
      clientId: CLIENT_ID
    });
  };

  createSession = async user => {
    await AsyncStorage.setItem('user', JSON.stringify(user.user));
    await AsyncStorage.setItem('token', JSON.stringify(user.access_token)); //token JWT
    await this.setAuthorizationHeader();
    // const expoPushToken = await askForNotificationsPermission();
    // if (expoPushToken) {
    //   await AsyncStorage.setItem('expoPushToken', expoPushToken);
    //   // TODO this token need to be saved on BE
    //   // notificationService.sendExpoTokenToServer(expoPushToken);
    // }
  };

  destroySession = async () => {
    await AsyncStorage.clear();
    this.api.removeHeaders(['Authorization']);
  };

  login = async loginData => {
    // console.log('loginData', loginData);
    const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    await this.createSession(data);
    return data;
  };

  test = async () => {
    const { data } = await this.apiClient.get('/test');
    return data;
  };

  googleLogin = async loginPromise => {
    const result = await loginPromise;
    if (result.type !== 'success') {
      throw new Error(result.type);
    }
    const { data } = await this.apiClient.post(ENDPOINTS.GOOGLE, {
      accessToken: result.accessToken
    });
    await this.createSession(data);

    return data;
  };

  loginWithGoogle = async () => {
    return await this.googleLogin(
      Google.logInAsync({
        clientId:
          Platform.OS == OS_TYPES.IOS
            ? IOS_GOOGLE_CLIENT_ID
            : ANDROID_GOOGLE_CLIENT_ID,
        scopes: ['profile', 'email']
      })
    );
  };

  facebookLogin = async loginPromise => {
    const result = await loginPromise;
    if (result.type !== 'success') {
      throw new Error(result.type);
    }
    const { data } = await this.apiClient.post(ENDPOINTS.FACEBOOK, {
      accessToken: result.token
    });
    await this.createSession(data);

    return data;
  };

  loginWithFacebook = async () => {
    return await this.facebookLogin(
      Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
        permissions: ['public_profile', 'email']
      })
    );
  };

  logout = async () => {
    // const { data } = await this.apiClient.post(ENDPOINTS.LOGOUT);
    await this.destroySession();
    return { ok: true };
  };

  forgotPassword = data => this.apiClient.post(ENDPOINTS.FORGOT_PASSWORD, data);

  resetPassword = data => this.apiClient.post(ENDPOINTS.RESET_PASSWORD, data);

  signup = async signupData => {
    // await this.apiClient.post(ENDPOINTS.SIGN_UP, signupData);
    await this.apiClient.post(ENDPOINTS.SIGN_UP, signupData);
    // const { email, password } = signupData;
    return this.login(signupData);
  };

  checkToken = async () => {
    return await this.apiClient.post(ENDPOINTS.DETAILS);
  };

  getToken = async () => {
    const user = await AsyncStorage.getItem('token');
    // console.log('getToken1', user);
    // return user ? JSON.parse(user).access_token : undefined;
    return user ? JSON.parse(user) : undefined;
  };

  getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    return JSON.parse(user);
  };

  updateUserInStorage = async property => {
    const user = await AsyncStorage.getItem('user');
    let jsonUser = JSON.parse(user);
    jsonUser = { ...jsonUser, ...property };
    AsyncStorage.setItem('user', JSON.stringify(jsonUser));
  };
}

const authService = new AuthService();

export default authService;
