import React from "react";
import NewItemForm from "../../../components/NewItemForm";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Content from "../../../components/Content";
import storageManagerApi from "../../../services/storageManagerApi";

const supplierFields = [
  { name: "name", label: "Nome", type: "text", required: true },
  { name: "email", label: "Email", type: "text", required: false },
  { name: "cnpj", label: "CNPJ", type: "text", required: false },
  { name: "cep", label: "CEP", type: "text", required: false },
];

const NovoFornecedor = () => {
  const handleSupplierSubmit = async (data) => {
    try {
      console.log(data);
      const token = localStorage.getItem("authToken");
      await storageManagerApi.post("suppliers", data, {
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
          title="Criar novo fornecedor"
          fields={supplierFields}
          onSubmit={handleSupplierSubmit}
        />
      </Content>
    </>
  );
};

export default NovoFornecedor;
