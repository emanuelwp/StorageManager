import React from "react";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import Content from "../../../../components/Content";
import NewItemForm from "../../../../components/NewItemForm";

const NovaEntrada = () => {
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

export default NovaEntrada;
