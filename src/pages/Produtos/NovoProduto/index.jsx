import React, { useEffect, useState } from "react";
import NewItemForm from "../../../components/NewItemForm";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Content from "../../../components/Content";
import storageManagerApi from "../../../services/storageManagerApi";

const productFields = [
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
    name: "minShowcaseQuantity",
    label: "Quantidade Mínima na vitrine",
    type: "number",
    required: true,
  },
  { name: "categoryId", label: "Categoria", type: "select", required: false },
];

const NovoProduto = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await storageManagerApi.get("categories", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias da API:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleProductSubmit = async (data) => {
    try {
      const token = localStorage.getItem("authToken");
      await storageManagerApi.post("products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Erro ao enviar dados para a API:", error);
    }
  };

  const updatedProductFields = productFields.map((field) => {
    if (field.name === "categoryId") {
      return {
        ...field,
        options: categories.map((category) => ({
          value: category.id,
          label: category.name,
        })),
      };
    }
    return field;
  });

  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <NewItemForm
          title="Criar novo produto"
          fields={updatedProductFields}
          onSubmit={handleProductSubmit}
          basePath={"/produtos"}
        />
      </Content>
    </>
  );
};

export default NovoProduto;
