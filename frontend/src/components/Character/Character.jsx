import React from 'react';

import {
  View, Text, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

const backgroundImage = require('../../assets/images/gradient-background-banding.png');

const styles = {
  main: {
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#2d1b42',
    justifyContent: 'space-around',
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
  },
  headerText: {
    marginTop: 70,
    color: 'white',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  image: {
    width: 210,
    height: 60,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    zIndex: -1,
  },
  inputs: {
    height: 40,
    width: 160,
    backgroundColor: 'yellow',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
};
export default function Character() {
  return (
    <View style={styles.main}>
      <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={backgroundImage}>
        <View style={styles.header}>
          <Text style={styles.headerText}>16/09/2021</Text>
          <Text style={styles.headerText}>Home</Text>
          <Text style={styles.headerText}>NEXT: MEETING</Text>
        </View>
        <Text style={styles.title}> Character</Text>
      </ImageBackground>
    </View>
  );
}
Character.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
