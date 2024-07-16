import Content from "../../../components/Content";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Loading from "../../../components/Loading";
import Table from "../../../components/Table";
import getAllItems from "../../../hooks/getAllItems";

const entradasHeader = [
  { name: null, field: "id" },
  { name: "Produto", field: "product.name" },
  { name: "Quantidade", field: "movement_quantity" },
  { name: "Fornecedor", field: "supplier.name" },
  { name: "Descrição", field: "description" },
  { name: "Usuário", field: "user.name" },
  { name: "Data", field: "date_time" },
];

function Entrada() {
  const {
    data: entradasData,
    loading,
    error,
  } = getAllItems("movements?type=1");

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
        <h1>Entradas</h1>
        <Table
          headers={entradasHeader}
          data={entradasData}
          basePath="/movimentacoes/entrada"
        />
      </Content>
    </>
  );
}

export default Entrada;
