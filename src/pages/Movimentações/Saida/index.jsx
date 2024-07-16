import Content from "../../../components/Content";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Loading from "../../../components/Loading";
import Table from "../../../components/Table";
import getAllItems from "../../../hooks/getAllItems";

const saidasHeader = [
  { name: null, field: "id" },
  { name: "Produto", field: "product.name" },
  { name: "Quantidade", field: "movement_quantity" },
  { name: "Descrição", field: "description" },
  { name: "Usuário", field: "user.name" },
  { name: "Data", field: "date_time" },
];

function Saida() {
  const { data: saidasData, loading, error } = getAllItems("movements?type=3");

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
        <h1>Saidas</h1>
        <Table
          headers={saidasHeader}
          data={saidasData}
          basePath="/movimentacoes/saida"
        />
      </Content>
    </>
  );
}

export default Saida;
