import Content from "../../components/Content";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import Loading from "../../components/Loading";
import getAllItems from "../../hooks/getAllItems";

const fornecedoresHeaders = [
  { name: null, field: "id" },
  { name: "Nome", field: "name" },
  { name: "Email", field: "email" },
  { name: "CNPJ", field: "cnpj" },
  { name: "CEP", field: "cep" },
];

function Fornecedores() {
  const { data: fornecedoresData, loading, error } = getAllItems("suppliers");

  if (loading) {
    return (
      <>
        <Header />
        <Sidebar />
        <Content>
          <Loading />
        </Content>
      </>
    );
  }

  if (error) {
    return <div>Erro ao carregar dados</div>;
  }

  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <h1>Fornecedores</h1>
        <Table
          headers={fornecedoresHeaders}
          data={fornecedoresData}
          basePath="/fornecedores"
          deleteURL="/suppliers"
        />
      </Content>
    </>
  );
}

export default Fornecedores;
