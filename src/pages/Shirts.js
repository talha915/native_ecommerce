import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class Shirts extends Component {
    render(){
        return(
            <View>
                <Text>
                    Shirts Page
                </Text>
            </View>
        );
    }
}