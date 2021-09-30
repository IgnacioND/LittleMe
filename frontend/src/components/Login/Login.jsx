import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TextInput, TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from 'validate.js';
import constraints from '../../utils/constraints';

import { loginUser } from '../../redux/actions/loggedUser.creator';

import generalStyles from '../styles/generalStyles';
import { goToHomeScreen } from '../../utils/handlers';

const appLogo = require('../../assets/images/logo.png');

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [printWarning, setPrintWarning] = React.useState(false);

  const validationResult = validate({ emailAddress: userEmail }, constraints);

  const { email } = useSelector((store) => store.loggedUser);

  const loginHandler = () => {
    if (validationResult === undefined) {
      setPrintWarning(false);
      dispatch(loginUser({
        email: userEmail.toLowerCase(),
        password: userPassword,
      }));
    } else {
      setPrintWarning(true);
    }
  };

  const warningTexts = {
    none: '',
    wrongEmail: validationResult?.emailAddress[0],
    wrongAccount: 'Email or password are wrong',
  };

  let warningToPrint;
  if (printWarning) {
    warningToPrint = warningTexts.wrongEmail;
  } else if (email === 'erroneus') {
    warningToPrint = warningTexts.wrongAccount;
  } else { warningToPrint = warningTexts.none; }

  return (
    <View style={generalStyles.background}>
      <Image style={generalStyles.mainLogo} source={appLogo} />
      <View style={generalStyles.formContainer}>
        <TextInput placeholder="Username" style={generalStyles.normalInput} value={userEmail} onChangeText={(text) => setUserEmail(text)} />
        <Text testID="warningText">{warningToPrint}</Text>
        <TextInput placeholder="Login" secureTextEntry style={generalStyles.normalInput} value={userPassword} onChangeText={(text) => setUserPassword(text)} />
        <View style={generalStyles.textedButtonContainer}>
          <View style={generalStyles.textedButtonBack} />
          <TouchableOpacity style={generalStyles.textedButton} testID="loginButton" onPress={loginHandler}>
            <Text style={generalStyles.buttonText}>ENTER</Text>
          </TouchableOpacity>
        </View>
        <View style={generalStyles.textedButtonContainer}>
          <View style={generalStyles.textedButtonBack} />
          <TouchableOpacity style={generalStyles.textedButton} testID="backButton" onPress={goToHomeScreen(navigation)}>
            <Text style={generalStyles.buttonText}>BACK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
