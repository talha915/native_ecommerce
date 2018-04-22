import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

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

const Screens = DrawerNavigator({
    Home: {screen: HomeStack},
    Contact: {screen: ContactStack}
});

export default Screens;