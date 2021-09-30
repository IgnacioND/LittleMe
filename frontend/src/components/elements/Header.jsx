import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { useSelector } from 'react-redux';
import generalStyles from '../styles/generalStyles';
import headerStyles from '../styles/headerStyles';
import { goToCalendarScreen, goToDashboardScreen, goToProfileScreen } from '../../utils/handlers';

const iconHome = require('../../assets/images/iconHome.png');
const iconCalendar = require('../../assets/images/iconCalendar.png');

export default function Header({ navigation }) {
  const { username } = useSelector((store) => store.user);

  return (
    <View style={headerStyles.headerContainer}>
      <View style={generalStyles.iconButtonContainer}>
        <View style={generalStyles.iconButtonBack} />
        <TouchableOpacity
          style={generalStyles.iconButton}
          onPress={goToDashboardScreen(navigation)}
        >
          <Image source={iconHome} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goToProfileScreen(navigation)}>
        <Text style={headerStyles.headerText}>{username}</Text>
      </TouchableOpacity>
      <View style={generalStyles.iconButtonContainer}>
        <View style={generalStyles.iconButtonBack} />
        <TouchableOpacity
          style={generalStyles.iconButton}
          onPress={goToCalendarScreen(navigation)}
        >
          <Image source={iconCalendar} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
