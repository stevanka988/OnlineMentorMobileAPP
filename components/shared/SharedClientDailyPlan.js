/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import Colors from '../../constants/Colors';
import NavigationService from '../../services/NavigationService';
import RootNavigation from '../../services/RootNavigation';

const SharedClientDailyPlan = ({ navigation }) => {
  const onDateChange = date =>
    navigation.navigate('SelectedClientDailyPlanScreen', {
      date: moment(date)
        .format('ll')
        .toString()
    });

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={onDateChange}
        selectedDayColor={Colors.cloudColor}
        textStyle={styles.calendarTextStyle}
        startFromMonday={true}
        todayBackgroundColor="transparent"
        todayTextStyle={Colors.backgroundAppColor}
      />
      <Text style={styles.stepText}>Select day</Text>
    </View>
  );
};

export default SharedClientDailyPlan;

const styles = StyleSheet.create({
  calendarTextStyle: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular'
  },
  container: {
    backgroundColor: Colors.lightGrayBackground,
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 30
  },
  stepText: {
    alignSelf: 'center',
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-bold',
    fontSize: 26,
    paddingBottom: 40
  }
});
