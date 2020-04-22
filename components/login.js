import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform
} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>


                <Image
                    style={{
                        resizeMode: "contain",
                        marginTop: 40
                    }}
                    source={require("../assets/logo.png")}
                />                    
           
                        <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={styles.container}
                    >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <TextInput placeholder="Usuário"
                        
                        style={{marginBottom: 50,
                            borderColor: "#000000",
                            borderBottomWidth: 1
                            
                        }} />
                        <TextInput placeholder="Senha" secureTextEntry={true} 
                        style={{marginTop: -130,
                            borderColor: "#000000",
                            borderBottomWidth: 1
                            
                        }} />

                
                        <View style={styles.btnContainer}>
                        <Button 
                        style={{textDecorationLine: 'none'}}
                        
                        title="Entrar" onPress={() => null} />
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
   
                 <View style={{

                     alignSelf: 'stretch',
                  
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     marginBottom: 50,
                    
                 }}>
                     
                 <View syle={styles.btnContainerBottom}>
                 
                 <Button title="Conheça" onPress={() => null}

                    style={{
                        alignSelf: 'flex-end',
                        padding: 30,
                        
                    }}

                 />
                 </View>
                 <View syle={styles.btnContainerBottom}>
                 
                 <Button title="Cadastrar" onPress={() => null}

                    style={{
                        alignSelf: 'flex-end',
                        padding: 30,
                        
                    }}

                 />
                 </View>

                     </View>       


            </View>
            );
    };

}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center"
        
        },
        inner: {
          marginTop: -70,  
          padding: 44,
          flex: 1,
          justifyContent: "space-around"
        },
        header: {
          fontSize: 26,
          justifyContent: "center"
        },
        textInput: {
          height: 20,
          borderColor: "#000000",
          borderBottomWidth: 1,
        },
        btnContainer: {
          backgroundColor: "#A0023F",
          borderRadius: 30,
          marginTop: -100
        
        },


        btnContainerBottom: {
          backgroundColor: "#A0023F",
          borderRadius: 30
        }
      });
      