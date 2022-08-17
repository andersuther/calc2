
import styled from "styled-components/native";

 export const Container = styled.View`
flex:1;
background-color:#3C7CA0 ;
`;

export const Principal = styled.Text`
justify-content: center;
align-items: center;
font-family: 'Inter';
font-weight: bold ;
color: #ECECEC;
font-size: 23px ;
`;

export const HeaderContainer = styled.View`
width: 100%;
height: 53%;
margin-top: 3%;
justify-content: center;
align-items: center;
`
export const ButtonsContainer = styled.View`
width: 100%;
height: 50%;
justify-content: center;
align-items: center;
`

export const ButtonChildContainer = styled.View`
width: 100%;
height: 60px;
align-items: center;
justify-content: center;
flex-direction: row;
margin-bottom: 10%;
`

export const Texto1 = styled.Text`
justify-content: center;
align-items: center;
font-family: 'Inter';
font-weight: bold ;
color: #ECECEC;
font-size: 24px;
`;


export const TextInput = styled.TextInput`
justify-content: center;
align-items: center;
background-color: #D9D9D9;
width: 310px;
height: 45px;
border-radius: 23px;
font-size: 22px;
padding-left:20px;
font-family: 'Inter';
font-weight: bold ;
`;

export const Resultado = styled.View`
text-align: center;
justify-content: center;
align-items: center;
background-color: #7EA5AD;
width: 310px;
height: 50px;
border-radius: 23px;
font-size: 32px;
font-family: 'Inter';
font-weight: bold ;
color:  #ECECEC; 
margin-top: 1px;
`;

export const TextoResult = styled.Text`
font-family: 'Inter';
font-weight: bold ;
color: ${props => props.cor || '#ECECEC'};
font-size:24px ;
`;

export const Botao1 = styled.TouchableOpacity`
background-color: #7EA5AD;
width: 129px;
height: 80px;
border-radius: 14px;
margin: 10px;
`;

export const Textbotao = styled.Text`
text-align: center;
font-weight: bold ;
color: #ECECEC;
font-size: 64px;
`;
