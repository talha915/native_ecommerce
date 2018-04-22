import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView, NavigationActions } from 'react-navigation';

import {Icon, Avatar} from 'react-native-elements';

export default class DrawerComponent extends Component{
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    constructor(props){
        super(props)
    }
    render(){
        const props = this.props;
        return(
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
                    <ScrollView>
                        <View>
                            <View style={styles.block}>
                                <Text style={styles.blockText}>
                                    Home Section
                                </Text>
                            </View>
                            <View style={styles.blockContent}>
                                <TouchableOpacity>
                                    <Text style={styles.blockText} onPress={this.navigateToScreen('Home')}>
                                        Home
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={styles.block}>
                                <Text style={styles.blockText}>
                                    Accessories Section
                                </Text>
                            </View>
                            <View style={styles.blockContent}>
                                <TouchableOpacity>
                                    <Text style={styles.blockText} onPress={this.navigateToScreen('Laptop')}>
                                        Laptop
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.blockContent}>
                                <TouchableOpacity>
                                    <Text style={styles.blockText} onPress={this.navigateToScreen('Mobile')}>
                                        Mobiles 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={styles.block}>
                                <Text style={styles.blockText}>
                                    Clothes Section
                                </Text>
                            </View>
                            <View style={styles.blockContent}>
                                <TouchableOpacity>
                                    <Text style={styles.blockText} onPress={this.navigateToScreen('Shirts')}>
                                        Shirts
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.blockContent}>
                                <TouchableOpacity>
                                    <Text style={styles.blockText} onPress={this.navigateToScreen('Pants')}>
                                        Pants & Shorts 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={styles.block}>
                                <Text style={styles.blockText}>
                                    Contact Section
                                </Text>
                            </View>
                            <View style={styles.blockContent}>
                                <TouchableOpacity>
                                    <Text style={styles.blockText} onPress={this.navigateToScreen('Contact')}>
                                        Contact Us
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
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
    }
    
}

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
    },
    block: {
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center'
    },
    blockContent: {
        height: 50,
        backgroundColor: '#666699',
        justifyContent: 'center',
    },
    blockText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
  