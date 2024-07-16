import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";
import Dashboard from "../../components/Dashboard";

function Inicio() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <Dashboard />
      </Content>
    </>
  );
}

export default Inicio;
