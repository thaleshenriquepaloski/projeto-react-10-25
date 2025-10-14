import Logo from "../Logo/index.js"
import OpcoesHeader from "../OpcoesHeader/index.js";
import IcosHeader from '../IconsHeader/index.js';
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IcosHeader/>
        </HeaderContainer>
    )
}

export default Header;