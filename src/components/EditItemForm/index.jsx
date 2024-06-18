import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Title = styled.h2`
  color: #372067;
  text-align: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #372067;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #f8964b;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f8964b;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #e68539;
  }
`;

const EditItemForm = ({ title, fields, initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
            />
          </div>
        ))}
        <Button type="submit">Salvar</Button>
      </form>
    </FormContainer>
  );
};

export default EditItemForm;