import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, editTodo, removeTodo } from "todoActions";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Content = styled.span`
  flex: 1;
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
`;

const Button = styled.button`
  background-color: ${(props) => (props.danger ? "#dc3545" : "#007bff")};
  color: #fff;
  border: none;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
`;

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <List>
      {Object.values(todos.data).map((todo) => (
        <ListItem key={todo.id}>
          <Checkbox
            type="checkbox"
            checked={todo.complete}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <Content complete={todo.complete}>{todo.content}</Content>
          <Button onClick={() => handleEdit(todo.id, prompt("Edit task:", todo.content))}>Edit</Button>
          <Button danger onClick={() => handleDelete(todo.id)}>Delete</Button>
          <Button onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.complete ? "Incomplete" : "Complete"}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
