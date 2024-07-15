import Content from "../../../components/Content";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Table from "../../../components/Table";

const entradasHeader = [
  { name: null, field: "id" },
  { name: "Nome", field: "name" },
  { name: "Descrição", field: "description" },
];
const entradasData = [];
function Entrada() {
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
