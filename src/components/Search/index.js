import InputStylezed from "../Input/";
import styled from "styled-components";
import { useState } from "react";
import { listaLivros } from "./dadosSimuladosPesquisa.js"

const SectionSearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 124px 0;
    height: 470px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 37px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const DivLivroEncontradoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 180px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {

    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    
    return (
        <SectionSearchContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante!</Subtitulo>
            <InputStylezed
                placeholder="Escreva sua próxima leitura!"
                onBlur={(event) => {
                    const textoDigitado = event.target.value;
                    const resultadoPesquisa = listaLivros
                        .filter((livro) => livro.nome
                            .includes(textoDigitado));
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map((livro) => (
                <DivLivroEncontradoContainer>
                    <img src={livro.src} alt={`Imagem do livro ${livro.nome}`}/>
                    <p>{livro.nome}</p>
                </DivLivroEncontradoContainer>
            )) }
        </SectionSearchContainer>
    )
}

export default Search;