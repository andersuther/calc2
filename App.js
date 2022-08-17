import React, { useState } from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';

import { Container, HeaderContainer, ButtonChildContainer, ButtonsContainer, TextInput, TextInput2, Resultado, Botao1, Botao2, Botao3, Botao4, Texto1, Principal, TextoResult, Texto2, Textbotao } from './src/styles';

export default function calc2() {

  const [valor, setValor] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState();


  const equacao = (qual) => {
    setResultado(eval(`parseInt(valor)${qual}parseInt(valor2)`))
  }

  return (
    <KeyboardAvoidingView style={{ height: '100%' }} behavior={'height'}>
      <Container>
        <HeaderContainer>
          <Principal>CALCULADORA BÁSICAS</Principal>

          <Texto1>Valor 1</Texto1>

          <TextInput
            style={{ color: '#285680' }}
            onChangeText={(texto) => { setValor(texto) }}
            value={String(valor)}
            keyboardType='numeric'
          >
          </TextInput>

          <Texto1>Valor 2</Texto1>

          <TextInput
            style={{ color: '#285680' }}
            onChangeText={(texto) => { setValor2(texto) }}
            value={String(valor2)}
            keyboardType='numeric'
          >
          </TextInput>

          <Texto1>Resultado</Texto1>

          <Resultado>

            <Text style={{ color: '#ECECEC', fontSize: 32, fontWeight: 'bold' }}>{resultado?.toFixed(2)}</Text>

          </Resultado>
        </HeaderContainer>

        <ButtonsContainer>

          <ButtonChildContainer>
            <Botao1
              onPress={() => equacao('+')}
            >
              <Textbotao>+</Textbotao>
            </Botao1>

            <Botao1
              onPress={() => equacao('-')}
            >
              <Textbotao>-</Textbotao>
            </Botao1>
          </ButtonChildContainer>
          <ButtonChildContainer>

            <Botao1
              onPress={() => equacao('*')}
            >
              <Textbotao>*</Textbotao>
            </Botao1>

            <Botao1
              onPress={() => equacao('/')}>
              <Textbotao>/</Textbotao>
            </Botao1>
          </ButtonChildContainer>
        </ButtonsContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}

