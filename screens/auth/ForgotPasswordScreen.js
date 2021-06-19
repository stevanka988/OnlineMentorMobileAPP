import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';

import { ForgotPasswordForm } from '../../components/auth/ForgotPasswordForm';
import { passwordForgot } from '../../store/actions/UserActions';
import { setForgotPasswordError } from '../../store/actions/ErrorActions';
import { forgotPasswordErrorSelector } from '../../store/selectors/ErrorSelector';
import SharedTrainerClientChooseButton from '../../components/shared/SharedTrainerClientChooseButton';
import LoginHeader from '../../components/auth/Login/LoginHeader';
import SharedGoBackButtonAuth from '../../components/shared/SharedGoBackButtonAuth';
import SharedLinearGradientBackgroundVertical from '../../components/shared/SharedLinearGradientBackgroundVertical';
import Colors from '../../constants/Colors';

const ForgotPasswordScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);
  const handlePasswordForgot = useCallback(data =>
    dispatch(passwordForgot({ credentials: data, userType: selected }))
  );
  const handleSetForgotPasswordError = data => dispatch(setForgotPasswordError(data));

  const forgotPasswordError = useSelector(forgotPasswordErrorSelector());

  const goBack = () => navigation.goBack();

  useEffect(() => {
    return () => handleSetForgotPasswordError(false);
  }, []);

  return (
    <SharedLinearGradientBackgroundVertical
      childrenColors={[
        Colors.lightBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.darkBackgroundAppColor
      ]}
      childrenStyle={styles.gradientBackground}
    >
      <SafeAreaView>
        <KeyboardAwareScrollView enableOnAndroid>
          <LoginHeader />

          <SharedTrainerClientChooseButton userType={value => setSelected(value)} />
          <ForgotPasswordForm
            onSubmit={handlePasswordForgot}
            forgotPasswordError={forgotPasswordError}
          />
        </KeyboardAwareScrollView>
        <SharedGoBackButtonAuth goBack={goBack} />
      </SafeAreaView>
    </SharedLinearGradientBackgroundVertical>
  );
};

ForgotPasswordScreen.navigationOptions = {
  header: null
};

ForgotPasswordScreen.propTypes = {
  navigation: PropTypes.object
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  gradientBackground: {
    height: '100%'
  }
});
