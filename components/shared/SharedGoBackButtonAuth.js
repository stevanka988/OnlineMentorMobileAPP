import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import IconName from '../../constants/IconName';
import Colors from '../../constants/Colors';

const SharedGoBackButtonAuth = ({ goBack }) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.goBack}>
      <Icon.Ionicons name={IconName.goBack} size={30} color={Colors.light} />
    </TouchableOpacity>
  );
};

export default SharedGoBackButtonAuth;

SharedGoBackButtonAuth.propTypes = {
  goBack: PropTypes.func
};

const styles = StyleSheet.create({
  goBack: {
    left: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 50,
    zIndex: 99
  }
});
