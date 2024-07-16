import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import Content from "../../../../components/Content";
import NewItemForm from "../../../../components/NewItemForm";
import storageManagerApi from "../../../../services/storageManagerApi";

const entrieFields = [
  {
    name: "movementQuantity",
    label: "Quantidade",
    type: "number",
    required: true,
  },
  { name: "productId", label: "Produto", type: "select", required: true },
  { name: "supplierId", label: "Fornecedor", type: "select", required: true },
  { name: "description", label: "Descrição", type: "text", required: true },
];

const NovaEntrada = () => {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

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

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await storageManagerApi.get("suppliers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSuppliers(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias da API:", error);
      }
    };

    fetchSuppliers();
  }, []);

  const handleEntrieSubmit = async (rawData) => {
    try {
      const data = {
        ...rawData,
        movementTypeId: 1,
        movementQuantity: parseFloat(rawData.movementQuantity),
        productId: parseInt(rawData.productId),
        supplierId: parseInt(rawData.supplierId),
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

  const updatedEntrieFields = entrieFields.map((field) => {
    if (field.name === "productId") {
      return {
        ...field,
        options: products.map((product) => ({
          value: product.id,
          label: product.name,
        })),
      };
    }
    if (field.name === "supplierId") {
      return {
        ...field,
        options: suppliers.map((supplier) => ({
          value: supplier.id,
          label: supplier.name,
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
          title="Criar nova entrada de produto"
          fields={updatedEntrieFields}
          onSubmit={handleEntrieSubmit}
          basePath={"/movimentacoes/entrada"}
        />
      </Content>
    </>
  );
};

export default NovaEntrada;
