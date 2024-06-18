import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Content from "../../../components/Content";
import EditItemForm from "../../../components/EditItemForm";
import storageManagerApi from "../../../services/storageManagerApi";

const categoryFields = [
  { name: "name", label: "Nome", type: "text", required: true },
  { name: "description", label: "Descrição", type: "text", required: false },
];

const handleSubmit = async (data) => {
  const token = localStorage.getItem("authToken");
  try {
    const response = await storageManagerApi.put(
      `categories/${data.id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    alert.error("Erro ao enviar dados:", error);
  }
};

const EditarCategoria = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <EditItemForm
          title="Editar categoria"
          fields={categoryFields}
          initialData={item}
          onSubmit={handleSubmit}
          basePath={"/categorias"}
        />
      </Content>
    </>
  );
};

export default EditarCategoria;
