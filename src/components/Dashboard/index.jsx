import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
  background-color: #f8964b;
  color: #372067;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: #372067;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
    font-size: 14px;
  }
`;

const Dashboard = ({
  amountWithStock = [],
  nameWithStock = [],
  amountWithoutStock = [],
  nameWithoutStock = [],
  amountStockMin = [],
  nameStockMin = [],
  amountShowcaseMin = [],
  nameShowcaseMin = [],
}) => {
  return (
    <DashboardContainer>
      <Section>
        <h2>Produtos com estoque</h2>
        <ul>
          {nameWithStock.map((product, index) => (
            <li key={`withStock_${index}`}>
              {product}: {amountWithStock[index]}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2>Produtos sem estoque</h2>
        <ul>
          {nameWithoutStock.map((product, index) => (
            <li key={`withoutStock_${index}`}>{product}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2>Produtos abaixo do mínimo de estoque</h2>
        <ul>
          {nameStockMin.map((product, index) => (
            <li key={`stockMin_${index}`}>
              {product}: {amountStockMin[index]}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2>Produtos abaixo do mínimo da vitrine</h2>
        <ul>
          {nameShowcaseMin.map((product, index) => (
            <li key={`showcaseMin_${index}`}>{product}</li>
          ))}
        </ul>
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;
