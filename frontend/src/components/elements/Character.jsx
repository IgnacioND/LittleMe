/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import * as Progress from 'react-native-progress';
import taskStyles from '../styles/taskStyles';

const characterMock = require('../../assets/images/characterMock.png');

const taskGroup = {
  health: require('../../assets/images/iconHealth.png'),
  mind: require('../../assets/images/iconMind.png'),
  money: require('../../assets/images/iconMoney.png'),
  hygiene: require('../../assets/images/iconHygiene.png'),
};
export default function Character({ navigation }) {
  const { little } = useSelector((store) => store.user);
  const characterHandler = () => {
    navigation.navigate('CharacterScreen');
  };
  const stats = {
    hunger: (little?.stats?.hunger > 0) ? little.stats.hunger / 10 : 0,
    money: (little?.stats?.money > 0) ? little.stats.money / 100 : 0,
    hygiene: (little?.stats?.hygiene > 0) ? little.stats.hygiene / 10 : 0,
    mind: (little?.stats?.mind > 0) ? little.stats.mind / 10 : 0,
  };
  // useEffect(() => {}, [little]);
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 5 }}>
        <Image
          source={taskGroup.health}
          style={[taskStyles.healthIcon, { width: 25, height: 25 }]}
        />
        <Progress.Bar progress={stats.hunger} width={100} height={25} color="black" />
        <Progress.Bar progress={stats.money} width={100} height={25} color="black" />
        <Image
          source={taskGroup.money}
          style={[taskStyles.healthIcon, { width: 25, height: 25 }]}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 5 }}>
        <Image
          source={taskGroup.mind}
          style={[taskStyles.healthIcon, { width: 25, height: 25 }]}
        />
        <Progress.Bar progress={stats.mind} width={100} height={25} color="black" />
        <Progress.Bar progress={stats.hygiene} width={100} height={25} color="black" />
        <Image
          source={taskGroup.hygiene}
          style={[taskStyles.healthIcon, { width: 25, height: 25 }]}
        />
      </View>

      <Image
        style={{ height: 250, width: 340 }}
        // style={characterStyles.characterBack}
        source={characterMock}
        onPress={characterHandler}
      />
    </View>

  );
}

Character.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
