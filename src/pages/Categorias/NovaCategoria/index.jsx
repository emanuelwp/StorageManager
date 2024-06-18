import NewItemForm from "../../../components/NewItemForm";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Content from "../../../components/Content";
import storageManagerApi from "../../../services/storageManagerApi";

const categoryFields = [
  { name: "name", label: "Nome", type: "text", required: true },
  { name: "description", label: "Descrição", type: "text", required: false },
];

const NovaCategoria = () => {
  const handleCategorySubmit = async (data) => {
    try {
      const token = localStorage.getItem("authToken");
      await storageManagerApi.post("categories", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <NewItemForm
          title="Criar nova categoria"
          fields={categoryFields}
          onSubmit={handleCategorySubmit}
          basePath={"/categorias"}
        />
      </Content>
    </>
  );
};

export default NovaCategoria;
