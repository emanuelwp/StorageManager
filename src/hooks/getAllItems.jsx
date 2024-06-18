// src/hooks/getAllItems.js
import { useState, useEffect } from "react";
import storageManagerApi from "../services/storageManagerApi";

const getAllItems = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      storageManagerApi
        .get(endpoint, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados da API:", error);
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [endpoint]);

  return { data, loading, error };
};

export default getAllItems;
