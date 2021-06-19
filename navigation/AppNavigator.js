// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import AuthLoadingScreen from '../screens/AuthLoadingScreen';
// import TrainerMainTabNavigator from './TrainerMainTabNavigator';
// import ClientMainTabNavigator from './ClientMainTabNavigator';
// import AuthNavigator from './AuthNavigator';

// const AppNavigator = createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     AuthStack: AuthNavigator,
//     TrainerMainStack: TrainerMainTabNavigator
//     // ClientMainStack: ClientMainTabNavigator
//   },
//   {
//     initialRouteName: 'AuthLoading'
//   }
// );

// export default createAppContainer(AppNavigator);

import React, { useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ActivityIndicator,
//   StatusBar
// } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser } from '../store/actions/UserActions';
import { userSelector } from '../store/selectors/UserSelector';
import authService from '../services/AuthService';
import { userType } from '../helpers/userType';
import TrainerMainTabNavigator from './TrainerMainTabNavigator';
import ClientMainTabNavigator from './ClientMainTabNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const dispatch = useDispatch();

  const handleSetActiveUser = data => dispatch(setActiveUser(data));

  const user = useSelector(userSelector());

  useEffect(() => {
    bootstrapAsync();
    // await AsyncStorage.clear();
  }, []);

  const bootstrapAsync = async () => {
    const user = await authService.getUser();
    if (user) {
      handleSetActiveUser(user);
    } else {
      // navigation.navigate('AuthStack');
      // navigation.navigate('TrainerMainStack');
    }
  };

  // useEffect(
  //   () => {
  //     if (user.id) {
  //       userType(user.user_type)
  //         ? console.log('qqq', user)
  //         : console.log('qqq2', user);
  //     }
  //   },
  //   [user]
  // );

  return (
    // <View style={styles.container}>
    //   <ActivityIndicator style={styles.loading} />
    //   <StatusBar barStyle="default" />
    // </View>
    user && user.id ? (
      userType(user.user_type) ? (
        <TrainerMainTabNavigator />
      ) : (
        <ClientMainTabNavigator />
      )
    ) : (
      <AuthNavigator />
    )
  );
};

export default AppNavigator;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1
//   },

//   loading: {
//     marginTop: 30
//   }
// });
