import React, { Component } from "react";
import {View, StyleSheet, Text, Button, TouchableOpacity, Image} from "react-native";

//criando o botão e seu estilo
class Botao extends Component{

  constructor(props){
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao:{
        width:250,
        height:50,
        borderWidth:2,
        borderColor: props.color,
        backgroundColor:'transparent',
        borderRadius: 25
      },
      botaoArea:{
        flex:1,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems: "center"
      },
      botaoText:{
        color: props.color,
        fontSize:14,
        fontWeight: "bold"
      }
    });
  }

  render(){
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class BiscoitoDaSorte extends Component{

  constructor(props){
    super(props);
    this.state = {texto: "A sua sorte do dia é..."};
    this.frases = ['O Palmeiras não tem mundial', 'Santos é o maior time do século 20', 'Corona Vírus tá foda'];
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito(){
    let s = this. state;
    let r= Math.floor(Math.random()* this.frases.length);
    s.texto = this.frases[r];
    this.setState(s);
  }
  render(){
    return (
      <View style={styles.body}> 
        <Image source={require("./images/cookie.png")}></Image>
        <Text style={styles.text}>"{this.state.texto}"</Text>
        <Botao color="#B59619" text="Quebrar Biscoito" onPress={this.quebrarBiscoito}> </Botao>
      </View>
    );
  }
}


//estilos da página

const styles = StyleSheet.create({
  body:{
    paddingTop:35,
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  },
  text:{
    fontSize:14,
    color:"#B59619",
    margin:30,
    fontStyle:'italic',
    textAlign: "center"
  }
});
