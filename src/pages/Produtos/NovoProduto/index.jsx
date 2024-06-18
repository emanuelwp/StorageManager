import React from "react";
import NewItemForm from "../../../components/NewItemForm";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Content from "../../../components/Content";
import storageManagerApi from "../../../services/storageManagerApi";

const productsFields = [
  { name: "name", label: "Nome", type: "text", required: true },
  {
    name: "stockQuantity",
    label: "Quantidade no estoque",
    type: "number",
    required: false,
  },
  {
    name: "minStockQuantity",
    label: "Quantidade Mínima no estoque",
    type: "number",
    required: true,
  },
  {
    name: "showcaseQuantity",
    label: "Quantidade na vitrine",
    type: "number",
    required: false,
  },
  {
    name: "minshowcaseQuantity",
    label: "Quantidade Mínima na vitrine",
    type: "number",
    required: true,
  },
  { name: "categoryId", label: "Categoria", type: "select", required: false },
];

const NovoProduto = () => {
  const handleProductSubmit = async (data) => {
    try {
      console.log(data);
      const token = localStorage.getItem("authToken");
      await storageManagerApi.post("products", data, {
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
          title="Criar novo produto"
          fields={productsFields}
          onSubmit={handleProductSubmit}
        />
      </Content>
    </>
  );
};

export default NovoProduto;
