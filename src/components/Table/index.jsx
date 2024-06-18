import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import storageManagerApi from "../../services/storageManagerApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TableContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  justify-content: space-around;
`;

const TableActionsToRight = styled.th`
  background-color: #ffffff;
  padding: 12px;
  text-align: right;
`;

const TableData = styled.td`
  padding: 12px;
  text-align: center;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CreateButton = styled(ActionButton)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const PaginationButton = styled.button`
  padding: 8px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 4px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #d0d0d0;
    cursor: not-allowed;
  }
`;

const ITEMS_PER_PAGE = 10;

const Table = ({ headers, data, basePath, deleteURL }) => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleEdit = (item) => {
    navigate(`${basePath}/edit/${item.id}`, { state: { item } });
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      storageManagerApi
        .delete(`${deleteURL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };

  const handleCreateNew = () => {
    navigate(`${basePath}/new`);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div>
      <FilterContainer>
        <FilterInput
          type="text"
          placeholder="Filtrar por nome"
          value={filter}
          onChange={handleFilterChange}
        />
        <CreateButton onClick={handleCreateNew}>Criar Novo</CreateButton>
      </FilterContainer>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              {headers
                .filter((item) => item.name)
                .map((header, index) => (
                  <TableHeader key={index}>{header.name}</TableHeader>
                ))}
              <TableHeader></TableHeader>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <TableRow key={index}>
                {headers
                  .filter((item) => item.name)
                  .map((header, idx) => (
                    <TableData key={idx}>{item[header.field]}</TableData>
                  ))}
                <TableActionsToRight>
                  <ActionButton onClick={() => handleEdit(item)}>
                    Editar
                  </ActionButton>
                  <DeleteButton onClick={() => handleDelete(item.id)}>
                    Deletar
                  </DeleteButton>
                </TableActionsToRight>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
      <PaginationContainer>
        <PaginationButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </PaginationButton>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <PaginationButton
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </PaginationButton>
      </PaginationContainer>
    </div>
  );
};

export default Table;
