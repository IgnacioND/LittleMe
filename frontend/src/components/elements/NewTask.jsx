import React, { useState } from 'react';
import {
  View, TextInput, Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../../redux/actions/task.creator';
import { getUser } from '../../redux/actions/user.creator';
import generalStyles from '../styles/generalStyles';

import taskStyles from '../styles/taskStyles';
import taskGroups from '../../utils/taskGroups';
import { goToTasksScreen } from '../../utils/handlers';

const iconAddTask = require('../../assets/images/iconAddTask.png');
const iconList = require('../../assets/images/iconList.png');

function taskGroup(text) {
  let foundGroup = '';
  const splittedText = text.split(' ');
  const groupsKeys = Object.keys(taskGroups);
  splittedText.forEach((currentWord) => {
    groupsKeys.forEach((currentGroup) => {
      if (taskGroups[currentGroup]
        .includes(currentWord.toLowerCase())) {
        foundGroup = currentGroup;
      }
    });
  });
  return foundGroup;
}

export default function NewTask({ navigation }) {
  const dispatch = useDispatch();
  const [addTask, useAddTask] = useState(false);
  const loggedUser = useSelector((store) => store.loggedUser);
  const [text, setText] = useState('');
  const changeHandler = (writtingTask) => {
    setText(writtingTask);
  };
  const addTaskHandler = () => {
    if (addTask) {
      useAddTask(false);
      if (text.trim().length !== 0) {
        const taskIcon = taskGroup(text);

        dispatch(createTask({
          body: {
            name: text,
            description: 'task1 description',
            deleted: false,
            done: false,
            importance: 2,
            class: taskIcon,
          },
          token: loggedUser.token,
          userId: loggedUser.userId,
        })).then(dispatch(getUser(loggedUser)));
      }
      setText('');
    } else {
      useAddTask(true);
    }
  };

  return (
    <View style={{
      flexDirection: 'row',
    }}
    >
      {(addTask) && (
      <View style={[taskStyles.taskContainer, { width: 200, margin: 0, height: 40 }]}>
        <TextInput
          style={taskStyles.taskText}
          placeholder="Add new task"
          onChangeText={changeHandler}
        />
      </View>
      )}
      <View style={generalStyles.iconButtonContainer}>
        <View style={generalStyles.iconButtonBack} />
        <TouchableOpacity testID="addTaskHandler" style={generalStyles.iconButton} onPress={addTaskHandler}>
          <Image source={iconAddTask} />
        </TouchableOpacity>
      </View>
      <View style={generalStyles.iconButtonContainer}>
        <View style={generalStyles.iconButtonBack} />
        <TouchableOpacity testID="listHandler" style={generalStyles.iconButton} onPress={goToTasksScreen(navigation)}>
          <Image source={iconList} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
NewTask.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
