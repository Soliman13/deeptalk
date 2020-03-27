import React, { Component } from 'react';

import { StyleSheet, Text, TouchableOpacity, Textarea, TextInput, View, Button } from 'react-native';


export default function TecsteAreas() {

    const [selectedFile, setSelectedFile] = React.useState(null);
  const [source, setSource] = React.useState("file");
  const [textValue, setTextValue] = React.useState("");
  const [questionValue, setQuestion] = React.useState("");
  const [reponse, setReponse] = React.useState("");

  const fileChanged = (e) => setSelectedFile(e.target.files[0]);

  const sourceChanged = (e) => setSource(e.currentTarget.value);

  const textChanged = (e) => setTextValue(e.currentTarget.value);

  const questionChanged = (e) => setQuestion(e.currentTarget.value);

  const askQuestion = (e) => {
    console.log(e);
    fetch('http://192.168.1.192:19006/')
        .then(response => {
            console.log(response.json())
        })
    setReponse("Reponse envoyé au client")
};

return(

<View style={styles.colors}>
    

        <View style={styles.view}>
                <Text>Lien vers une FAQ</Text>
                <TextInput type="radio" name="source" style={styles.textinpute} onChange={textChanged} value={textValue}></TextInput>
        </View>



        <View style={styles.view}>
                <Text>Champ Texte</Text>
                <TextInput type="radio" name="source" style={styles.textinpute} onChange={textChanged} value={textValue}></TextInput>  
        </View>
        <View>
                 <Text style={styles.Ask}>
                     2. Ask Anything !!!
                 </Text>
        </View>

        <View>
                    <Text>Question</Text>

        <TextInput type="text" style={styles.textinpute} onChange={questionChanged} value={questionValue}></TextInput>
        </View>

        <View >
        
            
        </View>

        <View style={styles.bout}>
        
            <Button title="Rechercher" onPress={(e) => {askQuestion(e) }}></Button>
        
        </View>
        <View>
            <Text style={{marginTop: 25}}>
                Response
            </Text>
            
                <TextInput type="text" style={styles.textinpute} value={reponse}> </TextInput>  
        </View>
</View>

    );
}


 const styles=StyleSheet.create({

    Ask:{
        fontSize: 20,
        height: 35,
        marginTop: 20,
        marginBottom: 10,
      },

textinpute:{
    borderWidth:1,
    margin:15,
    height: 100,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom: 5,
},

bout:{
    height: 20,
    marginTop:25,
    marginLeft:145,
    marginRight:145,
    fontSize:16,
    backgroundColor:"red",
    fontWeight: "bold",
},

colors:{
    backgroundColor:"pink",
    color:"#f0fff0",
},

view:{
    textAlign:"center",
    flexDirection:"column",
},

container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
},

pdf: {
    flex:1,
    width:"150px",
    height:"auto",
},

 });