import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCubes,
  faTruck,
  faTags,
  faExchangeAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f8964b;
  color: #ffffff;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;

  .logo {
    width: 80%;
    max-width: 200px;
    margin-bottom: 20px;
  }

  ul {
    margin-top: 40px;
    list-style-type: none;
    padding: 0;
    width: 100%;
  }

  ul li {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }

  ul li a,
  ul li .movimentacoes {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    cursor: pointer;
  }

  ul li a,
  ul li .opcoes {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    cursor: pointer;
  }

  ul li a:hover,
  ul li .opcoes:hover {
    background-color: #ffffff;
    color: #372067;
  }

  ul li a.active,
  ul li .opcoes.active {
    background-color: #372067;
    color: #fff;
  }

  .submenu {
    list-style-type: none;
    padding-left: 15px;
    margin-top: 10px;
  }

  .submenu li {
    margin: 5px 0;
  }

  .submenu li a {
    font-size: 14px;
    padding: 8px 15px;
  }
`;

const Sidebar = () => {
  const location = useLocation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // Atualiza o estado do submenu com base na localização atual
  useEffect(() => {
    // Verifica se o submenu deve estar aberto com base na localização atual
    setIsSubmenuOpen(location.pathname.startsWith("/movimentacoes"));
  }, [location.pathname]); // Executa sempre que a localização muda

  return (
    <SidebarContainer>
      <ul>
        <li>
          <Link
            to="/home"
            className={location.pathname === "/home" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/produtos"
            className={location.pathname === "/produtos" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faCubes} />
            <span>Produtos</span>
          </Link>
        </li>
        <li>
          <Link
            to="/fornecedores"
            className={location.pathname === "/fornecedores" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faTruck} />
            <span>Fornecedores</span>
          </Link>
        </li>
        <li>
          <Link
            to="/categorias"
            className={location.pathname === "/categorias" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faTags} />
            <span>Categorias</span>
          </Link>
        </li>
        <li>
          <div
            className={"movimentacoes " + (isSubmenuOpen ? "active" : "")}
            onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
          >
            <FontAwesomeIcon icon={faExchangeAlt} />
            <span>Movimentações</span>
          </div>
          {isSubmenuOpen && (
            <ul className="submenu">
              <li>
                <Link
                  to="/movimentacoes/entrada"
                  className={
                    location.pathname === "/movimentacoes/entrada"
                      ? "active"
                      : ""
                  }
                >
                  <span>Entradas</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/movimentacoes/transferencia"
                  className={
                    location.pathname === "/movimentacoes/transferencia"
                      ? "active"
                      : ""
                  }
                >
                  <span>Transferências</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/movimentacoes/saida"
                  className={
                    location.pathname === "/movimentacoes/saida" ? "active" : ""
                  }
                >
                  <span>Saídas</span>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/relatorios"
            className={location.pathname === "/relatorios" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faFileAlt} />
            <span>Relatórios</span>
          </Link>
        </li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
