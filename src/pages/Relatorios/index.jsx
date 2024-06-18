import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Table from "../../components/Table";

const fornecedoresHeaders = ["Nome", "Email"];
const fornecedoresData = [
  { Código: "001", Nome: "Fornecedor A", Email: "fornecedorA@example.com" },
  { Código: "002", Nome: "Fornecedor B", Email: "fornecedorB@example.com" },
  { Código: "003", Nome: "Fornecedor C", Email: "fornecedorC@example.com" },
];
function Relatorios() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <h1>Relatórios</h1>
        <Table
          headers={fornecedoresHeaders}
          data={fornecedoresData}
          basePath="/relatorios"
        />
      </Content>
    </>
  );
}

export default Relatorios;
