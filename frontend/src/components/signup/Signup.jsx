import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, TextInput, TouchableOpacity, Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from 'validate.js';
import constraints from '../../utils/constraints';

import { registerUser } from '../../redux/actions/loggedUser.creator';

import generalStyles from '../styles/generalStyles';
import littleObj from '../../utils/littleObj';
import houseObj from '../../utils/houseObj';
import { goToHomeScreen } from '../../utils/handlers';

const appLogo = require('../../assets/images/logo.png');

export default function Signup({ navigation }) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userUsername, setUserUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const validationResult = validate({ emailAddress: userEmail }, constraints);
  const [printWarning, setPrintWarning] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);
  const loggedUser = useSelector((store) => store.signupUser);
  const signupHandler = () => {
    if (validationResult === undefined) {
      setEmailTaken(loggedUser);
      setPrintWarning(false);
      dispatch(registerUser({
        name: userName,
        username: userUsername,
        password: userPassword,
        email: userEmail.toLocaleLowerCase(),
        little: littleObj,
        house: houseObj,
      }));
    } else {
      setPrintWarning(true);
    }
  };
  const warningTexts = {
    none: '',
    wrongEmail: validationResult?.emailAddress[0],
    emailTaken: 'This email is already taken',
  };
  let warningToPrint;
  if (printWarning) {
    warningToPrint = warningTexts.wrongEmail;
  } else if (emailTaken) {
    warningToPrint = warningTexts.emailTaken;
  } else { warningToPrint = warningTexts.none; }

  return (
    <View style={generalStyles.background}>
      <Image style={generalStyles.mainLogo} source={appLogo} />
      <View style={generalStyles.formContainer}>
        <TextInput placeholder="Name" style={generalStyles.normalInput} value={userName} onChangeText={(text) => setUserName(text)} />
        <TextInput placeholder="Username" style={generalStyles.normalInput} value={userUsername} onChangeText={(text) => setUserUsername(text)} />
        <TextInput placeholder="Email" style={generalStyles.normalInput} value={userEmail} onChangeText={(text) => setUserEmail(text)} />
        <Text>{warningToPrint}</Text>
        <TextInput placeholder="Password" secureTextEntry style={generalStyles.normalInput} value={userPassword} onChangeText={(text) => setUserPassword(text)} />
        <View style={generalStyles.textedButtonContainer}>
          <View style={generalStyles.textedButtonBack} />
          <TouchableOpacity style={generalStyles.textedButton} onPress={signupHandler}>
            <Text style={generalStyles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={generalStyles.textedButtonContainer}>
          <View style={generalStyles.textedButtonBack} />
          <TouchableOpacity testID="signupButton" style={generalStyles.textedButton} onPress={goToHomeScreen(navigation)}>
            <Text style={generalStyles.buttonText}>BACK</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
