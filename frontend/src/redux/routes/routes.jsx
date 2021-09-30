import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Home from '../../components/Home/Home';
import Signup from '../../components/signup/Signup';
import Login from '../../components/Login/Login';
import Dashboard from '../../components/Dashboard/Dashboard';
import Calendar from '../../components/Calendar/Calendar';
import Character from '../../components/Character/Character';
import Tasks from '../../components/Tasks/Tasks';
import Profile from '../../components/Profile/Profile';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const AuthScreens = () => (
  <AuthStack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignupScreen"
      component={Signup}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);
const AppScreens = () => (
  <AppStack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="DashboardScreen"
      component={Dashboard}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="ProfileScreen"
      component={Profile}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="CalendarScreen"
      component={Calendar}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="TasksScreen"
      component={Tasks}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="CharacterScreen"
      component={Character}
    />
  </AppStack.Navigator>
);

export default function Route() {
  const { isAuthenticated } = useSelector((store) => store.loggedUser);
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppScreens />
      ) : (<AuthScreens />)}
    </NavigationContainer>
  );
}
