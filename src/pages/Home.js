import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class Home extends Component {
    static navigationOptions={
        headerTitle: 'Home',
        headerTitleStyle: {
            marginLeft: width-240
        }
    }
    render(){
        return(
            <View>
                <Text>
                    Home Page
                </Text>
            </View>
        );
    }
}