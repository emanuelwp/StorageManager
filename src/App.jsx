import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Categorias from "./pages/Categorias";
import Fornecedores from "./pages/Fornecedores";
import Relatorios from "./pages/Relatorios";
import Entrada from "./pages/Movimentações/Entrada";
import Transferencia from "./pages/Movimentações/Transferencia";
import Saida from "./pages/Movimentações/Saida";
import Login from "./pages/Login";
import storageManagerApi from "./services/storageManagerApi";
import NovaCategoria from "./pages/Categorias/NovaCategoria";
import NovoFornecedor from "./pages/Fornecedores/NovoFornecedor";
import NovoProduto from "./pages/Produtos/NovoProduto";
import EditarCategoria from "./pages/Categorias/EditarCategoria";

const isAuthenticated = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    try {
      await storageManagerApi.get("session", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
  return false;
};

const App = (await isAuthenticated())
  ? createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <Produtos />,
      },
      {
        path: "/produtos/new",
        element: <NovoProduto />,
      },
      {
        path: "/categorias",
        element: <Categorias />,
      },
      {
        path: "/categorias/new",
        element: <NovaCategoria />,
      },
      {
        path: "/categorias/edit/:id",
        element: <EditarCategoria />,
      },
      {
        path: "/fornecedores",
        element: <Fornecedores />,
      },
      {
        path: "/fornecedores/new",
        element: <NovoFornecedor />,
      },
      {
        path: "/movimentacoes/entrada",
        element: <Entrada />,
      },
      {
        path: "/movimentacoes/saida",
        element: <Saida />,
      },
      {
        path: "/movimentacoes/transferencia",
        element: <Transferencia />,
      },
      {
        path: "/relatorios",
        element: <Relatorios />,
      },
      {
        path: "/*",
        element: <h1>Not Found</h1>,
      },
    ])
  : createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/*",
        element: <Login />,
      },
    ]);

export default App;
