import React, { Component } from 'react';
import { StyleSheet, Text, Input, Slider, StatusBar, TextInput, View } from 'react-native';
//import App from './composantes/Constante';


export default class BoutonRadio extends React.Component {
        state = {
                FAQ: '',
                texte: '',
                file: '',
              };

    render(){
  
  return (
        <View>
                

        <View style={styles.view}> 
                 <Text>Fichier PDF</Text>
                <TextInput type="radio" name="source" style={styles.textinpute} value={this.state.file} 
                onChangeText={file=> this.setState({file})} id="file"></TextInput>
        </View>

        <View style={styles.view}>
                <Text>Lien vers une FAQ</Text>
                <TextInput type="radio" name="source" style={styles.textinpute} value={this.state.FAQ} 
                 onChangeText={FAQ=> this.setState({FAQ})} id="FAQ"></TextInput>
        </View>

        <View style={styles.view}>
                <Text>Champ Texte</Text>
                <TextInput type="radio" name="source" style={styles.textinpute} value={this.state.texte} 
                 onChangeText={texte=> this.setState({texte})} id="FAQ"></TextInput>  
        </View>
              
      </View>
  
  );
}
}
const styles=StyleSheet.create({

        textinpute:{
                borderWidth:1,
                margin:15,
                height: 80,
                fontWeight:"bold",
                textAlign:"center",

        },
        view:{
                textAlign:"center",
                flexDirection:"column",
        },


});