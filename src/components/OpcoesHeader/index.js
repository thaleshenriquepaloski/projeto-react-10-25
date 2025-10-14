import styled from "styled-components";

const OpcoesUlContainer = styled.ul`
  display: flex;
`
const OpcaoLi = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const opcoesTextos = ["CATEGORIA", "MINHA ESTANTE", "FAVORITOS"]

function OpcoesHeader() {
    return (
        <OpcoesUlContainer>
          { opcoesTextos.map((opcaoTextos) => (
            <OpcaoLi><p>{opcaoTextos}</p></OpcaoLi>
          )) }
        </OpcoesUlContainer>
    )
}

export default OpcoesHeader;