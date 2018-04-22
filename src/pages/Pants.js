import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class Pants extends Component {
   
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