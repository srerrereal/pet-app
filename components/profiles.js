import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    Image,
    StyleSheet
} from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.rectangle}/>

                <View style={styles.titleStyle}>
                    <Text style={{fontSize: 36}}> Lar dos Pets </Text>

                </View>

              <View style={{marginTop: 40}}/>
              
                <View style={styles.row}>

              <View>
              
              <Image
                    source={require('../assets/agenda.png')}
                    style={styles.image}
                />  

                </View>

                <View>
                <Image
                    source={require('../assets/agenda.png')}
                    style={styles.image}
                />
                </View>  
                
                <View>
                <Image
                    source={require('../assets/agenda.png')}
                    style={styles.image}
                />
                </View>

                

            </View>

        </View>

                )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    rectangle: {
        marginTop: 0,
        height: 100,
        backgroundColor: 'grey',
        flex: 0
        
    },
    image: {

    },
    titleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
        
    },
    image: {
    flexDirection: "column",
    margin: 12
    }
})