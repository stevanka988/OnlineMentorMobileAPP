import React, { useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setSignUpErrors } from '../../store/actions/ErrorActions';
import { signUpErrorsSelector } from '../../store/selectors/ErrorSelector';
import LoginHeader from '../../components/auth/Login/LoginHeader';
import SharedGoBackButtonAuth from '../../components/shared/SharedGoBackButtonAuth';
import { addClient } from '../../store/actions/ClientActions';
import { ClientSignUpForm } from '../../components/auth/ClientSignUpForm';
import SharedLinearGradientBackgroundHorizontal from '../../components/shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../constants/Colors';

const ClientCreate = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSignUp = useCallback(data => dispatch(addClient(data)));
  const handleSetSignUpErrors = data => dispatch(setSignUpErrors(data));
  const signUpErrors = useSelector(signUpErrorsSelector());

  const goBack = () => navigation.goBack();

  useEffect(() => {
    return () => handleSetSignUpErrors({});
  }, []);

  return (
    <SharedLinearGradientBackgroundHorizontal
      childrenColors={[
        Colors.lightBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.darkBackgroundAppColor
      ]}
      childrenStyle={styles.gradientBackground}
    >
      <SafeAreaView>
        <KeyboardAwareScrollView enableOnAndroid>
          <LoginHeader screen={'addClient'} />
          <ClientSignUpForm onSubmit={handleSignUp} signUpErrors={signUpErrors} />
        </KeyboardAwareScrollView>
        <SharedGoBackButtonAuth goBack={goBack} />
      </SafeAreaView>
    </SharedLinearGradientBackgroundHorizontal>
  );
};

ClientCreate.propTypes = {
  navigation: PropTypes.object
};

export default ClientCreate;

const styles = StyleSheet.create({
  gradientBackground: {
    height: '100%'
  }
});
