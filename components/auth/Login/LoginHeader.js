/* eslint-disable no-console */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Icon from '@expo/vector-icons';
import $t from 'i18n';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { currentClientSelector } from '../../../store/selectors/ClientSelector';
import { dailyMealListSelector } from '../../../store/selectors/DailyPlanSelector';
import { gallerySelector } from '../../../store/selectors/GallerySelector';
import { groceryListSelector } from '../../../store/selectors/GrocerySelector';
import { recipeListSelector } from '../../../store/selectors/RecipeSelector';
import { templateMealListSelector } from '../../../store/selectors/TemplateMealSelector';
import { templatesSelector } from '../../../store/selectors/TemplateSelector';
import { trainerSelector } from '../../../store/selectors/TrainerSelector';

import IconName from '../../../constants/IconName';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import { IsClientScreen } from '../../../helpers/IsClientScreen';

const LoginHeader = ({ screen }) => {
  const client = useSelector(currentClientSelector());
  const dailyMeal = useSelector(dailyMealListSelector());
  const gallery = useSelector(gallerySelector());
  const grocery = useSelector(groceryListSelector());
  const recipe = useSelector(recipeListSelector());
  const templateMeal = useSelector(templateMealListSelector());
  const template = useSelector(templatesSelector());
  const trainer = useSelector(trainerSelector());
  console.log('1ss', client);
  console.log('2ss', dailyMeal);
  console.log('3ss', gallery);
  console.log('4ss', grocery);
  console.log('5ss', recipe);
  console.log('6ss', templateMeal);
  console.log('7ss', template);
  console.log('8ss', trainer);
  return (
    <View style={styles.container}>
      {IsClientScreen(screen) ? (
        <>
          <Icon.FontAwesome5 name={IconName.userAdd} size={100} color={Colors.cloudColor} />
          <Text style={styles.headerText}>{$t('auth.addClient').toUpperCase()}</Text>
        </>
      ) : (
        <>
          <Icon.Fontisto name={IconName.cloud} size={150} color={Colors.cloudColor} />
          <Text style={styles.headerText}>{$t('auth.tigsAcademy').toUpperCase()}</Text>
        </>
      )}
    </View>
  );
};

export default LoginHeader;

LoginHeader.propTypes = {
  screen: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: Layout.window.headerHeight,
    justifyContent: 'center'
  },
  headerText: {
    color: Colors.lightGray,
    fontFamily: 'montserrat-bold',
    fontSize: 18,
    paddingTop: 15
  }
});
