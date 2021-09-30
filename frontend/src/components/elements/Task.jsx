/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import taskStyles from '../styles/taskStyles';
import { deleteTask, doneTask } from '../../redux/actions/task.creator';
import { getUser } from '../../redux/actions/user.creator';

const iconDelete = require('../../assets/images/iconDelete.png');

const taskGroup = {
  work: require('../../assets/images/iconWork.png'),
  studies: require('../../assets/images/iconStudies.png'),
  house: require('../../assets/images/iconHouse.png'),
  leisure: require('../../assets/images/iconLeisure.png'),
  health: require('../../assets/images/iconHealth.png'),
};

export default function Task({ task }) {
  const loggedUser = useSelector((store) => store.loggedUser);
  const completeUser = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const viewTaskHandler = () => {
  };
  const doneHandler = () => {
    dispatch(getUser(loggedUser));
    dispatch(doneTask({
      token: loggedUser.token,
      userId: loggedUser.userId,
      completeUser,
      taskId: task._id,
      taskClass: task?.class,
    }));
  };
  const deleteHandler = () => {
    dispatch(deleteTask({
      token: loggedUser.token,
      userId: loggedUser.userId,
      taskId: task?._id,
    }));
  };

  return (
    <View style={taskStyles.taskContainer}>
      <TouchableOpacity style={taskStyles.checkbox} onPress={doneHandler}>
        {/* <Image source={iconDone} /> */}
      </TouchableOpacity>
      <Text style={taskStyles.taskText} onPress={viewTaskHandler}>{task?.name}</Text>
      <Image source={taskGroup[task?.class]} style={taskStyles.groupIcon} />
      <TouchableOpacity onPress={deleteHandler}>
        <Image source={iconDelete} style={taskStyles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
}
