import React, { Component, Fragment } from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native';

export default class resume extends Component {

        render() {
          return(
            <Fragment>


            <View style={styles.profile}>
          
          
                  <View style={{
                    flexDirection: 'row'
                  }}
                  >
                     <Image
                source={require('../assets/perfil.png')}
                style={{
                  
                  alignSelf: 'flex-start'
                }}
                />
              <Text style={{
                
                marginLeft: 10,
                fontSize: 30,
                alignSelf: 'center'
              }}>Cachorro</Text>


                  </View>
                  
            </View>


              <View style={styles.rectangle}>
              
              <View style={styles.rectangleMenu}>
                <Text style={{fontSize: 30}}>Inicio</Text>
              </View>
                <View style={styles.innerText}>
                <Text style={{fontSize: 20}}>Inicio</Text>
                <Text style={{fontSize: 20}}>Perfis</Text>
              

                </View>
                
              <View style={styles.rectangleMenuSecond}>
                <Text style={{fontSize: 30}}>Vacinas</Text>
              </View>
              <View style={styles.alignBottom}>
              
                  <View style={styles.rectangleMenuThird}>
                    <Text style={{fontSize: 30}}>Ajuda</Text>
                  </View>
              
              </View>

           
            </View>

              
            
              </Fragment>




          
     

          )
        }
  
}

const styles = StyleSheet.create({
      rectangle: {
        backgroundColor: '#F4B26B',
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-end',
        width: 170,
        marginTop: -139
        
        
                
    },

    profile: {
      flexDirection: 'column',
      alignSelf: 'flex-start',
      marginTop: 80,
      marginLeft: 10,
    },

    columnMenu: {
      width: '60',
      flex: 1,
      backgroundColor: "orange"
    },

    rectangleMenu: {
      width: 170,
      height: 30,
      alignSelf: "baseline",
      backgroundColor: "#E29137",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderColor: "#333333",
      borderWidth: 3
    },
    innerText: {
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      marginTop: 30
    

    },

    rectangleMenuSecond:{
      marginTop: 100,
      width: 170,
      height: 30,
      alignSelf: "baseline",
      backgroundColor: "#E29137",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderColor: "#333333",
      borderWidth: 3

    },
    rectangleMenuThird:{
      width: 170,
      height: 30,
      top: 0,
      backgroundColor: "#E29137",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderColor: "#333333",
      borderWidth: 3

    },

    alignBottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 66    }
})