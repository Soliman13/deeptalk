import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BoutonRadio from './composantes/boutonRadio';
import TecsteAreas from './composantes/TecsteArea';
//import PDFExample from './composantes/PDF';

export default class QuestionAnswer extends React.Component {
/*
  state = {
    FAQ: '',
    texte:'',
    file: '',
  };
*/

  render(){

return (
  <View>
        <View>
        <Text style={styles.text}>Deep Talk</Text>
        <Text style={styles.source}>1. Select Source</Text>
        <Text></Text>
        </View> 
      <View>
        
        <TecsteAreas></TecsteAreas>
        </View>
  

  </View>
      
     
      
  );
}  
}

  const styles=StyleSheet.create({
    text:{
      fontSize: 40,
      marginTop: 20,
      textAlign: "center",

    },
    source:{
      height: 35,
      fontWeight: "bold",
    },

    containerClasse:{
      flex :  2,
      
      textAlign: "center",  
      marginLeft: 15,
      marginRight: 25,
    },



  });