import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import generalStyles from '../styles/generalStyles';
import { goToLoginScreen, goToSignupScreen } from '../../utils/handlers';

const appLogo = require('../../assets/images/logo.png');

export default function Home({ navigation }) {
  return (
    <View style={generalStyles.background}>
      <Image style={generalStyles.mainLogo} source={appLogo} />
      <View style={generalStyles.formContainer}>
        <View style={generalStyles.textedButtonContainer}>
          <View style={generalStyles.textedButtonBack} />
          <TouchableOpacity testID="loginButton" style={generalStyles.textedButton} onPress={goToLoginScreen(navigation)}>
            <Text style={generalStyles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={generalStyles.textedButtonContainer}>
          <View style={generalStyles.textedButtonBack} />
          <TouchableOpacity testID="signupButton" style={generalStyles.textedButton} onPress={goToSignupScreen(navigation)}>
            <Text style={generalStyles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
