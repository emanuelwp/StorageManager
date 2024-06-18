import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Content from "../../../components/Content";
import EditItemForm from "../../../components/EditItemForm";
import storageManagerApi from "../../../services/storageManagerApi";

const supplierFields = [
  { name: "name", label: "Nome", type: "text", required: true },
  { name: "email", label: "Email", type: "text", required: false },
  { name: "cnpj", label: "CNPJ", type: "text", required: false },
  { name: "cep", label: "CEP", type: "text", required: false },
];

const handleSubmit = async (data) => {
  const token = localStorage.getItem("authToken");
  try {
    const response = await storageManagerApi.put(`suppliers/${data.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    alert.error("Erro ao enviar dados:", error);
  }
};

const EditarFornecedor = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <EditItemForm
          title="Editar fornecedor"
          fields={supplierFields}
          initialData={item}
          onSubmit={handleSubmit}
          basePath={"/fornecedores"}
        />
      </Content>
    </>
  );
};

export default EditarFornecedor;
