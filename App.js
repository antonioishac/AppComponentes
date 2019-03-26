import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';


export default class AppComponentes extends Component {

  constructor(props) {

    super(props);
    this.state = {texto: ''};

    this.mudarTexto = this.mudarTexto.bind(this);

  }

  mudarTexto(t) {
    let s = this.state;
    if (t.length > 0) {
      s.texto = 'Olá ' + t;
    } else {
      s.texto = '';
    }
    this.setState(s);
  }

  render() {
    return (
      <View>

        <TextInput style={styles.input} placeholder="Digite seu nome" onChangeText={this.mudarTexto} />
        <Text style={styles.texto}>{this.state.texto}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  input: {
    height:40,
    borderWidth:1,
    borderColor: '#000000',
    margin:10,
    padding:10
  },
  texto: {
    fontSize:15,
    color:'blue',
    textAlign: 'center'
  }

});