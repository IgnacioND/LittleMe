import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, TouchableOpacity,
} from 'react-native';

import generalStyles from '../styles/generalStyles';
import footerStyles from '../styles/footerStyles';
import { goToCreateTaskScreen, goToTasksScreen } from '../../utils/handlers';

const iconAddTask = require('../../assets/images/iconAddTask.png');
const iconList = require('../../assets/images/iconList.png');

export default function Footer({ navigation }) {
  return (
    <View style={footerStyles.footerContainer}>
      <View style={generalStyles.iconButtonContainer}>
        <View style={generalStyles.iconButtonBack} />
        <TouchableOpacity
          style={generalStyles.iconButton}
          onPress={goToCreateTaskScreen(navigation)}
        >
          <Image source={iconAddTask} />
        </TouchableOpacity>
      </View>
      <View style={generalStyles.iconButtonContainer}>
        <View style={generalStyles.iconButtonBack} />
        <TouchableOpacity style={generalStyles.iconButton} onPress={goToTasksScreen(navigation)}>
          <Image source={iconList} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

Footer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
