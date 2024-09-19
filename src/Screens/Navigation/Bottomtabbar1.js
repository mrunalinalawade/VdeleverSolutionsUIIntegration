import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';
import Homescreen from '../Homescreen';
import HomeScreenmain from '../HomeScreenmain';

const Tab = createBottomTabNavigator();



const SearchScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search Screen</Text>
  </View>
);

const PlayScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Play Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const BottomTabbar1 = (props) => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-filled';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Play') {
              iconName = 'play-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        tabBarActiveTintColor: '#CF76DD',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor:'#FFE7EA',
        tabBarStyle: {
          height: 60,
            paddingBottom: 10,
         
          
        },
        tabBarLabelStyle: {
          fontSize: 12,
          right:14
          
        },
        tabBarIconStyle: {
        
          alignItems: 'center',
          justifyContent: 'center',
          right:5
          
        },
        tabBarItemStyle: {
          marginTop: 4,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          flexDirection:'row',
     
         
          
         
         
        },
          tabBarBadge: route.name === 'Home' ? null : undefined,
          }
        
          )}
      >
      <Tab.Screen name="Home" component={HomeScreenmain} options={{ tabBarBadge: null,headerShown:false }}  />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Play" component={PlayScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default BottomTabbar1;



