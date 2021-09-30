/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,

} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../elements/Task';

import generalStyles from '../styles/generalStyles';
import Header from '../elements/Header';
import { getUser } from '../../redux/actions/user.creator';
import NewTask from '../elements/NewTask';
import taskStyles from '../styles/taskStyles';

const taskGroup = {
  work: require('../../assets/images/iconWork.png'),
  studies: require('../../assets/images/iconStudies.png'),
  house: require('../../assets/images/iconHouse.png'),
  leisure: require('../../assets/images/iconLeisure.png'),
  health: require('../../assets/images/iconHealth.png'),
};
export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const loggedUser = useSelector((store) => store.loggedUser);
  const completeUser = useSelector((store) => store.user);
  if (!completeUser?.email) {
    dispatch(getUser(loggedUser));
  }
  const [activeFilter, setActiveFilter] = useState('none');
  const [tasksToPrint, setTasksToPrint] = useState(completeUser?.tasks);

  function applyFilter(filter) {
    if (activeFilter === 'none' || activeFilter !== filter) {
      setActiveFilter(filter);
    } else {
      setActiveFilter('none');
    }
  }
  useEffect(() => {
    if (activeFilter === 'none') {
      setTasksToPrint(completeUser?.tasks);
    } else {
      setTasksToPrint(completeUser?.tasks.filter((element) => element.class === activeFilter));
    }
  }, [activeFilter, completeUser]);

  return (
    <View style={generalStyles.background}>
      <Header navigation={navigation} />
      <View style={generalStyles.allTasks}>
        <ScrollView style={generalStyles.dashboardScroll}>

          {tasksToPrint?.map((task) => (
            (!task.deleted && !task.done) && (
              <Task
                key={`${completeUser._id}${task?._id}`}
                navigation={navigation}
                task={task}
              />
            )
          ))}
        </ScrollView>
        <View style={{
          flexDirection: 'row', marginBottom: 120, justifyContent: 'space-around',
        }}
        >
          <TouchableOpacity
            onPress={() => applyFilter('work')}
          >
            <Image source={taskGroup.work} style={taskStyles.workIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => applyFilter('studies')}
          >
            <Image source={taskGroup.studies} style={taskStyles.studiesIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => applyFilter('house')}
          >
            <Image source={taskGroup.house} style={taskStyles.houseIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => applyFilter('leisure')}
          >
            <Image source={taskGroup.leisure} style={taskStyles.leisureIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => applyFilter('health')}
          >
            <Image source={taskGroup.health} style={taskStyles.healthIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <NewTask navigation={navigation} />
      {/* <Footer navigation={navigation} /> */}
    </View>
  );
}
Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
