import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Table from "../../components/Table";
import Loading from "../../components/Loading";
import getAllItems from "../../hooks/getAllItems";

const produtosHeader = [
  { name: null, field: "id" },
  { name: "Nome", field: "name" },
  { name: "Categoria", field: "category.name" },
];

function Produtos() {
  const { data: produtosData, loading, error } = getAllItems("products");

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
        <h1>Produtos</h1>
        <Table
          headers={produtosHeader}
          data={produtosData}
          basePath="/produtos"
          deleteURL="/products"
        />
      </Content>
    </>
  );
}

export default Produtos;
