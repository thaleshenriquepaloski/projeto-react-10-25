import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const IconsUl = styled.ul`
  display: flex;
  align-items: center;
`
const ImgLiIcon = styled.li`
  margin-right: 40px;
  width: 25px;
`

const icons = [sacola, perfil];

function IcosHeader() {
    return (
        <IconsUl>
          { icons.map((icon) => (
            <ImgLiIcon><img src={icon} alt=""></img></ImgLiIcon>
          )) }
        </IconsUl>
    )
}

export default IcosHeader;