import Header from "../../components/Header";
import Content from "../../components/Content";
import Table from "../../components/Table";
import getAllItems from "../../hooks/getAllItems";
import Sidebar from "../../components/Sidebar";
import Loading from "../../components/Loading";

const categoriasHeader = [
  { name: null, field: "id" },
  { name: "Nome", field: "name" },
  { name: "Descrição", field: "description" },
];

function Categorias() {
  const { data: categoriasData, loading, error } = getAllItems("categories");

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
        <h1>Categorias</h1>
        <Table
          headers={categoriasHeader}
          data={categoriasData}
          basePath="/categorias"
          deleteURL="/categories"
        />
      </Content>
    </>
  );
}

export default Categorias;
