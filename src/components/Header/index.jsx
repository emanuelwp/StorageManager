import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

const HeaderContainer = styled.div`
  background-color: #f0f0f0; /* Cor de fundo do cabeçalho */
  color: #372067; /* Cor do texto */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Cabeçalho fixo */
  top: 0;
  left: 250px; /* Largura da sidebar */
  width: calc(
    100% - 250px
  ); /* Ajuste para o conteúdo ocupar toda a largura restante */
  z-index: 1000; /* Garante que o cabeçalho fique sobre a sidebar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
  font-family: "Roboto", sans-serif; /* Fonte do Google Fonts */

  h1 {
    margin: 0;
    font-size: 24px;
    color: #372067; /* Cor do título */
  }

  .logo {
    height: 40px; /* Altura da logo */
    width: auto; /* Largura automática para manter proporções */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Cultural Papelaria e Brinquedos</h1>
      <BsPersonCircle className="logo" />
    </HeaderContainer>
  );
};

export default Header;
