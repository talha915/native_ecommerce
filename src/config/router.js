import React from 'react';
import {TouchableOpacity, Dimensions, View, Text, StyleSheet} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import {DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Laptop from '../pages/Laptop';
import Mobile from '../pages/Mobile';
import DrawerComponent from './DrawerComponent';
const {height, width} = Dimensions.get('window');

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Home',
            headerTitleStyle: {
                marginLeft: width-240
            },
            headerRight: (
                <TouchableOpacity onPress={()=>navigation.navigate('DrawerToggle')}>
                    <Icon
                        name="bars"
                        type="font-awesome"
                        size= {25}
                        margin={15}
                    />
                </TouchableOpacity>
            )
        })
    }
});

const LaptopStack = StackNavigator({
    Laptop: {
        screen: Laptop,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Laptops',
            headerTitleStyle: {
                marginLeft: width-240
            },
            headerRight: (
                <TouchableOpacity onPress={()=>navigation.navigate('DrawerToggle')}>
                    <Icon
                        name="bars"
                        type="font-awesome"
                        size= {25}
                        margin={15}
                    />
                </TouchableOpacity>
            )
        })
    }
});

const MobileStack = StackNavigator({
    Mobile: {
        screen: Mobile,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Mobile',
            headerTitleStyle: {
                marginLeft: width-240
            },
            headerRight: (
                <TouchableOpacity onPress={()=>navigation.navigate('DrawerToggle')}>
                    <Icon
                        name="bars"
                        type="font-awesome"
                        size= {25}
                        margin={15}
                    />
                </TouchableOpacity>
            )
        })
    }
});

const ContactStack = StackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Contact Us',
            headerTitleStyle: {
                marginLeft: width-250
            },
            headerRight: (
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerToggle')}>
                    <Icon
                        name="bars"
                        size={25}
                        margin={15}
                        type="font-awesome"
                    />
                </TouchableOpacity>
            )
        })
    }
});


  
const Screens = DrawerNavigator(
    {
        Home: {screen: HomeStack},
        Laptop: {screen: LaptopStack},
        Mobile: {screen: MobileStack},
        Contact: {screen: ContactStack}
    },
    {
        paths: './DrawerComponent',
        contentComponent: DrawerComponent
    }
);
  
export default Screens;
