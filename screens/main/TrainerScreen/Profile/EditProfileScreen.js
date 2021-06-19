import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { userSelector } from '../../../../store/selectors/UserSelector';
import { updateTrainer } from '../../../../store/actions/TrainerActions';
import { UpdateTrainerForm } from '../../../../components/Trainer/TrainerProfile/UpdateTrainerForm';
import HeaderProfileImage from '../../../../components/Trainer/TrainerProfile/HeaderProfileImage';
import StandardNotificationModal from '../../../../components/shared/modal/StandardNotificationModal';
import { showStandardPopUpSelector } from '../../../../store/selectors/ErrorSelector';
import SharedLinearGradientBackgroundHorizontal from '../../../../components/shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../../constants/Colors';
import SharedGoBackButtonAuth from '../../../../components/shared/SharedGoBackButtonAuth';

const EditProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [photoUrl, setPhotoUrl] = useState(null);

  const trainer = useSelector(userSelector());
  const isStandardModalVisible = useSelector(showStandardPopUpSelector());

  const handleSubmit = updateUserData => {
    updateUserData.trainerId = trainer.id;
    updateUserData.profileImage = photoUrl;
    dispatch(updateTrainer(updateUserData));
  };

  const goBack = () => navigation.goBack();

  return (
    <SharedLinearGradientBackgroundHorizontal
      childrenColors={[
        Colors.darkBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.lightBackgroundAppColor
      ]}
      childrenStyle={styles.gradientBackground}
    >
      <SafeAreaView>
        <StandardNotificationModal visible={isStandardModalVisible} />
        <SharedGoBackButtonAuth goBack={goBack} />
        <KeyboardAwareScrollView enableOnAndroid>
          <HeaderProfileImage trainer={trainer} setProfileImageUrl={image => setPhotoUrl(image)} />
          <UpdateTrainerForm onSubmit={handleSubmit} trainer={trainer} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </SharedLinearGradientBackgroundHorizontal>
  );
};

EditProfileScreen.propTypes = {
  navigation: PropTypes.object
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1
  }
});
