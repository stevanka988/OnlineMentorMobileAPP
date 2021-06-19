// import { createStackNavigator } from 'react-navigation-stack';
// // import { createStackNavigator } from '@react-navigation/stack';

// import SignInScreen from '../screens/auth/SignInScreen';
// import SignUpScreen from '../screens/auth/SignUpScreen';
// import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
// import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
// import ForgotPasswordSuccess from '../screens/auth/ForgotPasswordSuccess';
// import ResetPasswordSuccess from '../screens/auth/ResetPasswordSuccess';
// import GuestSignUpScreen from '../screens/auth/GuestSignUpScreen';

// export default createStackNavigator({
//   SignIn: SignInScreen,
//   SignUp: SignUpScreen,
//   GuestSignUp: GuestSignUpScreen,
//   ForgotPassword: ForgotPasswordScreen,
//   ForgotPasswordSuccess,
//   ResetPassword: ResetPasswordScreen,
//   ResetPasswordSuccess
// });

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import ForgotPasswordSuccess from '../screens/auth/ForgotPasswordSuccess';
import ResetPasswordSuccess from '../screens/auth/ResetPasswordSuccess';
import GuestSignUpScreen from '../screens/auth/GuestSignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name="GuestSignUp"
      component={GuestSignUpScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ForgotPasswordSuccess"
      component={ForgotPasswordSuccess}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ResetPassword"
      component={ResetPasswordScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ResetPasswordSuccess"
      component={ResetPasswordSuccess}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AuthLoading"
      component={AuthLoadingScreen}
      // options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
