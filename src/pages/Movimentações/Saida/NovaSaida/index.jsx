import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import Content from "../../../../components/Content";
import NewItemForm from "../../../../components/NewItemForm";
import storageManagerApi from "../../../../services/storageManagerApi";

const exitsFields = [
  {
    name: "movementQuantity",
    label: "Quantidade",
    type: "number",
    required: true,
  },
  { name: "productId", label: "Produto", type: "select", required: true },
  { name: "description", label: "Descrição", type: "text", required: true },
];

const NovaSaida = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await storageManagerApi.get("products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias da API:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleExitSubmit = async (rawData) => {
    try {
      const data = {
        ...rawData,
        movementTypeId: 3,
        movementQuantity: parseFloat(rawData.movementQuantity),
        productId: parseInt(rawData.productId),
      };
      console.log(data);
      const token = localStorage.getItem("authToken");
      await storageManagerApi.post("movements", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Erro ao enviar dados para a API:", error);
    }
  };

  const updatedExitsFields = exitsFields.map((field) => {
    if (field.name === "productId") {
      return {
        ...field,
        options: products.map((product) => ({
          value: product.id,
          label: product.name,
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
          title="Criar nova saída de produto"
          fields={updatedExitsFields}
          onSubmit={handleExitSubmit}
          basePath={"/movimentacoes/saida"}
        />
      </Content>
    </>
  );
};

export default NovaSaida;
