import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Content from "../../components/Content";

function Incio() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <h1>Home</h1>
        <p>TELA DE INÍCIO</p>
      </Content>
    </>
  );
}

export default Incio;
