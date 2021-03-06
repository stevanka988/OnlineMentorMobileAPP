import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import SharedImportedGroceryList from '../../../../../shared/SharedImportedGroceryList';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const ImportAddGrocery = ({ handleImportGroceryModalVisible }) => {
  return (
    <View style={styles.inputGroceriesWrapper}>
      <Text style={styles.inputText}>{$t('trainer.groceries').toUpperCase()}</Text>
      <SharedImportedGroceryList closeIcon={true} />
      <View style={[ShadowStyleHigh, styles.groceriesButtonWrapper]}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[Colors.darkOker, Colors.oker, Colors.lightOker]}
          childrenStyle={styles.gradientGroceriesButtonWrapper}
        >
          <TouchableOpacity
            style={styles.importGroceryButton}
            onPress={handleImportGroceryModalVisible}
          >
            <Text style={styles.importButtonText}>{$t('common.import')}</Text>
          </TouchableOpacity>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </View>
  );
};

export default ImportAddGrocery;

ImportAddGrocery.propTypes = {
  handleImportGroceryModalVisible: PropTypes.func
};

export const styles = StyleSheet.create({
  gradientGroceriesButtonWrapper: {
    borderRadius: 15
  },
  groceriesButtonWrapper: {
    alignSelf: 'center',
    marginVertical: 20,
    width: '35%'
  },
  importButtonText: {
    color: 'white',
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  importGroceryButton: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%'
  },
  inputGroceriesWrapper: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    borderTopColor: Colors.light,
    borderTopWidth: 1,
    paddingVertical: 50
  },
  inputText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 26,
    paddingBottom: 10,
    textAlign: 'center'
  }
});