import React, { useState } from "react";
import styled from "styled-components";
import storageManagerApi from "../../services/storageManagerApi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #372067;
`;

const LoginBox = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  color: #372067;
  text-align: center;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #f8964b;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e07b31;
  }
`;

const ErrorContainer = styled.p`
  color: red;
  display: flex;
  justify-content: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await storageManagerApi.post(
        "login",
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("authToken", data.token);
      window.location.reload();
    } catch (error) {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={(e) => handleLogin(e)}>Entrar</Button>
        <ErrorContainer>{error}</ErrorContainer>
      </LoginBox>
    </Container>
  );
};

export default Login;
