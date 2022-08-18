import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, HeaderContainer, ButtonChildContainer, ButtonsContainer, TextInput, TextInput2, Resultado, Botao1, Botao2, Botao3, Botao4, Texto1, Principal, TextoResult, Texto2, Textbotao } from './src/styles';

export default function calc2() {

  const [valor, setValor] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState();

  const equacao = (qual) => {
    setResultado(eval(`parseInt(valor)${qual}parseInt(valor2)`))
  }

  return (

    <Container>
      <ScrollView>
        <HeaderContainer>
          <Principal>CALCULADORA BÁSICA</Principal>

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

            <TextoResult  >{resultado?.toFixed(2)}</TextoResult>

          </Resultado>
        </HeaderContainer>

        <ButtonsContainer>

          <ButtonChildContainer>
            <Botao1
              onPress={() => equacao('+')}
            >
              <Icon
                name='plus-circle'
                size={30}
                color='#ECECEC'
              />
            </Botao1>

            <Botao1
              onPress={() => equacao('-')}
            >
              <Icon
                name='minus-circle'
                size={30}
                color='#ECECEC'
              />
            </Botao1>
          </ButtonChildContainer>
          <ButtonChildContainer>

            <Botao1
              onPress={() => equacao('*')}
            >
              <Icon
                name='x-circle'
                size={30}
                color='#ECECEC'
              />
            </Botao1>

            <Botao1
              onPress={() => equacao('/')}>
              <Icon
                name='divide-circle'
                size={30}
                color='#ECECEC'
              />
            </Botao1>
          </ButtonChildContainer>
        </ButtonsContainer>
      </ScrollView>
    </Container>

  );
}

