/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
/* eslint-disable max-len */
// import React from 'react';
// import { Platform } from 'react-native';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createStackNavigator } from 'react-navigation-stack';
// // import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import $t from 'i18n';
// import * as Icon from '@expo/vector-icons';

// import TabBarIcon from '../components/TabBarIcon';
// import HomeScreenTrainer from '../screens/main/TrainerScreen/Home/HomeScreenTrainer';
// import SettingsScreen from '../screens/main/TrainerScreen/Settings/SettingsScreen';
// import TrainerLeftSlider from '../screens/main/TrainerLeftSlider';
// import ChangePassword from '../screens/main/profile/ChangePassword';
// import ClientCreate from '../screens/auth/ClientCreate';
// import EditProfileScreen from '../screens/main/TrainerScreen/Profile/EditProfileScreen';
// import HandleTabBarLabelStyle from '../helpers/HandleTabBarLabelStyle';
// import Colors from '../constants/Colors';
// import NutritionScreenTrainer from '../screens/main/TrainerScreen/Nutrition/NutritionScreenTrainer';
// import IconName from '../constants/IconName';
// import WorkoutScreen from '../screens/main/TrainerScreen/Workout/WorkoutScreen';
// import ChatScreen from '../screens/main/TrainerScreen/ChatScreen/ChatScreen';
// import HeaderBarStyle from '../constants/HeaderBarStyle';
// import WelcomeScreen from '../screens/main/TrainerScreen/WelcomeScreen';
// import { addHeaderLeftNavigator, addHeaderRightNavigator } from '../helpers';
// import Layout from '../constants/Layout';
// import TemplateMealScreenTrainer from '../screens/main/TrainerScreen/Nutrition/TemplateMealScreenTrainer';
// import DailyMealsScreenTrainer from '../screens/main/TrainerScreen/Nutrition/DailyMealsScreenTrainer';
// import SharedClientDailyMeals from '../components/shared/SharedClientDailyMeals';

// const HomeStack = createStackNavigator({
//   Welcome: WelcomeScreen,
//   Home: {
//     screen: HomeScreenTrainer,
//     navigationOptions: ({ navigation }) => {
//       const headerLeftNav = addHeaderLeftNavigator(navigation);
//       const headerRightNav = addHeaderRightNavigator(navigation);
//       return {
//         ...headerLeftNav,
//         ...headerRightNav,
//         headerStyle: HeaderBarStyle,
//         headerTitleStyle: { color: Colors.white, fontWeight: 'bold' },
//         title: 'Home'
//       };
//     }
//   },
//   SelectedClientDailyPlanScreen: {
//     screen: SharedClientDailyMeals,
//     navigationOptions: {
//       headerStyle: HeaderBarStyle
//     }
//   },
//   ClientCreate,
//   ChangePassword,
//   EditProfile: {
//     screen: EditProfileScreen,
//     navigationOptions: ({ navigation }) => {
//       const headerLeftNav = addHeaderLeftNavigator(navigation);
//       return {
//         ...headerLeftNav,
//         headerStyle: HeaderBarStyle,
//         headerTitleStyle: {
//           color: Colors.white,
//           fontFamily: 'montserrat-bold'
//         },
//         title: 'Update profile'
//       };
//     }
//   }
// });

// /* eslint-disable react/prop-types, react/display-name */
// HomeStack.navigationOptions = {
//   tabBarLabel: ({ focused }) => (
//     <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.home')} />
//   ),
//   tabBarIcon: ({ focused }) => (
//     <Icon.Octicons
//       name={IconName.home}
//       size={26}
//       color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />
//   )
// };

// const NutritionStack = createStackNavigator({
//   Nutrition: {
//     screen: NutritionScreenTrainer,
//     // navigationOptions: () => {
//     //   return {
//     //     title: 'Nutrition',
//     //     headerStyle: HeaderBarStyle,
//     //     headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
//     //   };
//     // }
//     navigationOptions: () => {
//       return {
//         header: null
//       };
//     }
//   },
//   TemplateMealScreenTrainer: {
//     screen: TemplateMealScreenTrainer,
//     navigationOptions: {
//       headerStyle: HeaderBarStyle
//     }
//   },
//   DailyMealsScreenTrainer: {
//     screen: DailyMealsScreenTrainer,
//     navigationOptions: {
//       headerStyle: HeaderBarStyle
//     }
//   }
// });

// NutritionStack.navigationOptions = {
//   tabBarLabel: ({ focused }) => (
//     <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.nutrition')} />
//   ),
//   tabBarIcon: ({ focused }) => (
//     <Icon.MaterialCommunityIcons
//       name={IconName.nutritions}
//       size={26}
//       color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />
//   )
// };

// const WorkoutStack = createStackNavigator({
//   Workout: {
//     screen: WorkoutScreen,
//     navigationOptions: () => {
//       return {
//         title: 'Workout',
//         headerStyle: HeaderBarStyle,
//         headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
//       };
//     }
//   }
// });

// WorkoutStack.navigationOptions = {
//   tabBarLabel: ({ focused }) => (
//     <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.workout')} />
//   ),
//   tabBarIcon: ({ focused }) => (
//     <Icon.Entypo
//       name={IconName.workout}
//       size={26}
//       color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />
//   )
// };

// const ChatStack = createStackNavigator({
//   Workout: {
//     screen: ChatScreen,
//     navigationOptions: () => {
//       return {
//         title: 'Chat',
//         headerStyle: HeaderBarStyle,
//         headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
//       };
//     }
//   }
// });

// ChatStack.navigationOptions = {
//   tabBarLabel: ({ focused }) => (
//     <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.chat')} />
//   ),
//   tabBarIcon: ({ focused }) => (
//     <Icon.Entypo
//       name={IconName.chat}
//       size={26}
//       color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />
//   )
// };

// const SettingsStack = createStackNavigator({
//   Settings: {
//     screen: SettingsScreen,
//     navigationOptions: () => {
//       return {
//         title: 'Settings',
//         headerStyle: HeaderBarStyle,
//         headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
//       };
//     }
//   }
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: ({ focused }) => (
//     <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.settings')} />
//   ),
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   )
// };

// const BottomTabNavigator = createBottomTabNavigator(
//   {
//     HomeStack,
//     NutritionStack,
//     WorkoutStack,
//     ChatStack,
//     SettingsStack
//   },
//   {
//     tabBarOptions: {
//       style: {
//         backgroundColor: Colors.darkBackgroundAppColor,
//         borderTopColor: Colors.backgroundAppColor,
//         borderTopWidth: 1,
//         shadowColor: Colors.black,
//         shadowOffset: {
//           width: 0,
//           height: 12
//         },
//         shadowOpacity: 10,
//         shadowRadius: 16.0,
//         elevation: 24
//       },
//       keyboardHidesTabBar: true
//     }
//   }
// );

// export default createDrawerNavigator(
//   {
//     BottomTabNavigator: BottomTabNavigator
//   },
//   {
//     drawerWidth: Layout.window.width - 70,
//     contentComponent: TrainerLeftSlider,
//     overlayColor: 0.9
//   }
// );
import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Icon from '@expo/vector-icons';
import Constants from 'expo-constants';

import WelcomeScreen from '../screens/main/TrainerScreen/WelcomeScreen';
import HomeScreenTrainer from '../screens/main/TrainerScreen/Home/HomeScreenTrainer';
import SharedClientDailyMeals from '../components/shared/SharedClientDailyMeals';
import ClientCreate from '../screens/auth/ClientCreate';
import EditProfileScreen from '../screens/main/TrainerScreen/Profile/EditProfileScreen';
// import { ChangePassword } from '../screens/main/profile/ChangePassword';
// import { EditProfileScreen } from '../screens/main/TrainerScreen/Profile/EditProfileScreen';

// import NutritionScreenTrainer from '../screens/main/TrainerScreen/Nutrition/NutritionScreenTrainer';
// import TemplateMealScreenTrainer from '../screens/main/TrainerScreen/Nutrition/TemplateMealScreenTrainer';
// import DailyMealsScreenTrainer from '../screens/main/TrainerScreen/Nutrition/DailyMealsScreenTrainer';

// import WorkoutScreen from '../screens/main/TrainerScreen/Workout/WorkoutScreen';

import ChatScreen from '../screens/main/TrainerScreen/ChatScreen/ChatScreen';
import Colors from '../constants/Colors';
import IconName from '../constants/IconName';

import TrainerLeftSlider from '../screens/main/TrainerLeftSlider';
import HeaderBarStyle from '../constants/HeaderBarStyle';

// import SettingsScreen from '../screens/main/TrainerScreen/Settings/SettingsScreen';

const WorkoutScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Details!</Text>
  </View>
);

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    {/* <HomeStack.Screen name="Settings" component={SettingsScreen} />
    <HomeStack.Screen name="Details" component={WorkoutScreen} /> */}
    <HomeStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        title: 'Clients',
        headerStyle: HeaderBarStyle,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold'
        },
        headerRight: () => (
          <Icon.AntDesign
            onPress={() => navigation.openDrawer()}
            name="menuunfold"
            size={24}
            color="white"
            style={styles.headerIcon}
          />
        )
      }}
    />
    <HomeStack.Screen
      name="Home"
      component={HomeScreenTrainer}
      options={{
        title: false,
        headerStyle: [HeaderBarStyle, { height: Constants.statusBarHeight }],
        headerLeft: false
      }}
    />
    <HomeStack.Screen
      name="ClientCreate"
      component={ClientCreate}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen name="SelectedClientDailyPlanScreen" component={SharedClientDailyMeals} />
    {/* <HomeStack.Screen name="Home" component={HomeScreenTrainer} />
      <HomeStack.Screen name="SelectedClientDailyPlanScreen" component={SharedClientDailyMeals} />
      <HomeStack.Screen name="ClientCreate" component={ClientCreate} />
      <HomeStack.Screen name="ChangePassword" component={ChangePassword} />
      <HomeStack.Screen name="EditProfile" component={EditProfileScreen} /> */}
  </HomeStack.Navigator>
);

const NutritionStack = createStackNavigator();

const NutritionStackScreen = () => (
  <NutritionStack.Navigator>
    <NutritionStack.Screen name="Settings" component={SettingsScreen} />
    <NutritionStack.Screen name="Details" component={WorkoutScreen} />
    {/* <NutritionStack.Screen name="Nutrition" component={NutritionScreenTrainer} />
    <NutritionStack.Screen name="TemplateMealScreenTrainer" component={TemplateMealScreenTrainer} />
    <NutritionStack.Screen name="DailyMealsScreenTrainer" component={DailyMealsScreenTrainer} /> */}
  </NutritionStack.Navigator>
);

const WorkoutStack = createStackNavigator();

const WorkoutStackScreen = () => (
  <WorkoutStack.Navigator>
    {/* <WorkoutStack.Screen name="Workout" component={WorkoutScreen} /> */}
    <WorkoutStack.Screen name="Home" component={WorkoutScreen} />
  </WorkoutStack.Navigator>
);

const ChatStack = createStackNavigator();

const ChatStackScreen = () => (
  <ChatStack.Navigator>
    <ChatStack.Screen name="Chat" component={ChatScreen} />
  </ChatStack.Navigator>
);

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={SettingsScreen} />
  </SettingsStack.Navigator>
);

const Tab = createBottomTabNavigator();

const TrainerMainTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      style: {
        backgroundColor: Colors.darkBackgroundAppColor,
        borderTopColor: Colors.darkBackgroundAppColor,
        borderTopWidth: 1,
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowOpacity: 10,
        shadowRadius: 16.0,
        elevation: 24
      }
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <Icon.Octicons
            name={IconName.home}
            size={26}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
        // tabBarBadge: 3
      }}
    />

    <Tab.Screen
      name="Nutrition"
      component={NutritionStackScreen}
      options={{
        tabBarLabel: 'Nutrition',
        tabBarIcon: ({ focused }) => (
          <Icon.MaterialCommunityIcons
            name={IconName.nutritions}
            size={26}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }}
    />
    <Tab.Screen
      name="Workout"
      component={WorkoutStackScreen}
      options={{
        tabBarLabel: 'Workout',
        tabBarIcon: ({ focused }) => (
          <Icon.Entypo
            name={IconName.workout}
            size={26}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatStackScreen}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ focused }) => (
          <Icon.Entypo
            name={IconName.chat}
            size={26}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsStackScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ focused }) => (
          <Icon.Entypo
            name={IconName.chat}
            size={26}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }}
    />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={props => <TrainerLeftSlider {...props} />}
    drawerStyle={styles.drawerContainer}
  >
    <Drawer.Screen name="Homes" component={TrainerMainTabNavigator} />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  drawerContainer: {
    width: '90%'
  },
  headerIcon: {
    paddingHorizontal: 10
  }
});

export default DrawerNavigator;
