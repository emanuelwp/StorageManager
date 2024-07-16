import Content from "../../../components/Content";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Loading from "../../../components/Loading";
import Table from "../../../components/Table";
import getAllItems from "../../../hooks/getAllItems";

const transferenciasHeader = [
  { name: null, field: "id" },
  { name: "Produto", field: "product.name" },
  { name: "Quantidade", field: "movement_quantity" },
  { name: "Descrição", field: "description" },
  { name: "Usuário", field: "user.name" },
  { name: "Data", field: "date_time" },
];

function Transferencia() {
  const {
    data: transferenciasData,
    loading,
    error,
  } = getAllItems("movements?type=2");

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
        <h1>Transferencias</h1>
        <Table
          headers={transferenciasHeader}
          data={transferenciasData}
          basePath="/movimentacoes/transferencia"
        />
      </Content>
    </>
  );
}

export default Transferencia;
