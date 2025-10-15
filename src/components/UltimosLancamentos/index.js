import { ultimosLancamentosLivros } from "./dadosUltimoLancamentos"
import { TituloStylizedH2 } from "../Titulo/index.js"
import imgLivro2 from "../../images/livro2.png"
import CardRecomendado from "../CardRecomendado/index.js";
import styled from "styled-components";

const UltimosLancamentosContainerSection = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainerDiv = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainerSection>
            <TituloStylizedH2 tamanhoFonte="50px" alinhamentoTexto="center">
                Últimos Lançamentos
            </TituloStylizedH2>
            <NovosLivrosContainerDiv>
                { ultimosLancamentosLivros.map((livro) => (
                    <img src={livro.src} alt={`Imagem do livro ${livro.nome}`}></img>
                )) }
            </NovosLivrosContainerDiv>
            <CardRecomendado
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo aplicação integrada com a plataforma Google."
                imagem={imgLivro2}>
            </CardRecomendado>
        </UltimosLancamentosContainerSection>
    )
}

export default UltimosLancamentos;