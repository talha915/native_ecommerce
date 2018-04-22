import React from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import {Icon, Avatar} from 'react-native-elements';

const DrawerComponent = (props) => (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Avatar
              large
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              activeOpacity={0.8}
            />
          </View>
          <View style={{flex:2, alignItems:'stretch', marginLeft: 15}}>
            <Text>
              Name: XYZ
            </Text>
            <Text>
              Email id: xyz@abc.com
            </Text>
          </View>
        </View>
        <View style={styles.body}>
  
          <DrawerItems {...props} />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style = {styles.button}>
              <Text style={styles.buttonText}>
                 Sign Out
              </Text>
           </TouchableOpacity>
        </View>
      </View>
);
export default DrawerComponent;

const styles=StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems: 'center',
  
    },
    header: {
      flex: 3,
      alignSelf:'stretch',
      backgroundColor: 'gray',
      flexDirection:'row',
      alignItems:'center'
    },
    body:{
      flex:6,
      alignSelf:'stretch'
    },
    footer: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor:'yellow'
    },
    button: {
        padding: 25,
        borderColor: 'black',
        backgroundColor:'#4286f4',
        alignItems:'center',
        justifyContent:'center'
     },
     buttonText:{
       alignItems:'center',
       justifyContent:'center',
       fontSize:20,
       color:'white'
     }
});
  