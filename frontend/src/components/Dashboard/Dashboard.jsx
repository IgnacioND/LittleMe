/* eslint-disable no-underscore-dangle */
import React from 'react';

import {
  View,
  ScrollView,

} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../elements/Task';

import generalStyles from '../styles/generalStyles';
import Header from '../elements/Header';
import { getUser } from '../../redux/actions/user.creator';
import Character from '../elements/Character';
import NewTask from '../elements/NewTask';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const loggedUser = useSelector((store) => store.loggedUser);
  const completeUser = useSelector((store) => store.user);
  if (!completeUser?.email) {
    dispatch(getUser(loggedUser));
  }
  return (
    <View style={generalStyles.background}>
      <Header navigation={navigation} />
      <Character
        navigation={navigation}
      />
      <View style={generalStyles.dashboardTasks}>
        <ScrollView>
          {(completeUser?.tasks?.length > 0)
          && completeUser?.tasks?.map((task) => (
            (!task.deleted && !task.done) && (
              <Task
                testId="taskPrinted"
                key={`${completeUser._id}${task?._id}`}
                task={task}
              />
            )
          ))}
        </ScrollView>
      </View>
      <NewTask navigation={navigation} />
    </View>
  );
}
Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
