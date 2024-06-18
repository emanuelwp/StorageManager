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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero vitae lorem dictum, sed consequat dui malesuada.
        </p>
      </Content>
    </>
  );
}

export default Incio;
