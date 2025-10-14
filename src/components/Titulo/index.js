import styled from "styled-components";

export const TituloStylizedH2 = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.corLetras || "#EB9B00"};
    font-size: ${props => props.tamanhoFonte || "36px"} ;
    text-align: ${props => props.alinhamentoTexto || "center"};
    margin: 0;
`