/* eslint-disable no-underscore-dangle */
import React from 'react';

import {
  View,
  Text,

} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import generalStyles from '../styles/generalStyles';
import Header from '../elements/Header';
import { getUser } from '../../redux/actions/user.creator';
import NewTask from '../elements/NewTask';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const loggedUser = useSelector((store) => store.loggedUser);
  const completeUser = useSelector((store) => store.user);
  if (!completeUser?.email) {
    dispatch(getUser(loggedUser));
  }
  return (
    <View style={generalStyles.background}>
      <Header navigation={navigation} />
      <View>
        <Text style={generalStyles.profileTexts}>{`Name: ${completeUser?.name}`}</Text>
        <Text style={generalStyles.profileTexts}>{`Username: ${completeUser?.username}`}</Text>
        <Text style={generalStyles.profileTexts}>{`Little Name: ${completeUser?.little?.name}`}</Text>
        <Text style={generalStyles.profileTexts}>{`Little Age: ${completeUser?.little?.age}`}</Text>
        <Text style={generalStyles.profileTexts}>{`Money: ${completeUser?.little?.money}`}</Text>
      </View>
      <NewTask navigation={navigation} />
    </View>
  );
}
Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
