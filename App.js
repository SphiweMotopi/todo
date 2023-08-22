import React from "react";
import TodoForm from "TodoForm";
import TodoList from "TodoList";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AppTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

function App() {
  return (
    <AppContainer>
      <AppTitle>Todo App</AppTitle>
      <TodoForm />
      <TodoList />
    </AppContainer>
  );
}

export default App;
