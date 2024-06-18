import React from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Content from "../../../components/Content";
import EditItemForm from "../../../components/EditItemForm";

const categoryFields = [
  { name: "name", label: "Nome", type: "text", required: true },
  { name: "description", label: "Descrição", type: "text", required: false },
];

const initialData = {
  name: "Item de Exemplo",
  description: "Descrição do item de exemplo",
  // Adicione mais campos conforme necessário
};

const handleSubmit = (formData) => {
  console.log("Dados enviados:", formData);
  // Faça algo com os dados enviados, como uma requisição à API
};

const EditarCategoria = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <EditItemForm
          title="Editar categoria"
          fields={categoryFields}
          InitialData={initialData}
          onSubmit={handleSubmit}
        />
      </Content>
    </>
  );
};

export default EditarCategoria;
