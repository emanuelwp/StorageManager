import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EditItemForm from "../../../components/EditItemForm";
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

const EditarProduto = () => {
  const [categories, setCategories] = useState([]);
  const [initialData, setInitialData] = useState({});

  const location = useLocation();
  const item = location.state?.item || {};

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

    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await storageManagerApi.get(`products/${item.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInitialData(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto da API:", error);
      }
    };

    if (item.id) {
      fetchProduct();
    }

    fetchCategories();
  }, [item.id]);

  const handleSubmit = async (data) => {
    const token = localStorage.getItem("authToken");
    console.log(data);

    try {
      const response = await storageManagerApi.put(
        `products/${data.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Dados enviados:", response.data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  const updatedFields = productFields.map((field) => {
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
        <EditItemForm
          title="Editar produto"
          fields={updatedFields}
          initialData={initialData}
          onSubmit={handleSubmit}
          basePath={"/produtos"}
        />
      </Content>
    </>
  );
};

export default EditarProduto;
