import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoDivContainer = styled.div`
    display: flex;
`;
const LogoImg = styled.img`
    margin-right: 10px;
`;

function Logo() {
    return (
        <LogoDivContainer>
            <LogoImg
                src={logo}
                alt="Logo Hanna Books">     
            </LogoImg>
          <p><strong>Hanna</strong>Books</p>
        </LogoDivContainer>
    ) 
}

export default Logo;