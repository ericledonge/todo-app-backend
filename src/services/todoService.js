const { v4: uuid } = require("uuid");

const todos = require("../database/todo");

const getAllTodos = () => {
  const allTodos = todos.getAllTodos();

  return allTodos;
};

const getOneTodo = (todoId) => {
  const todo = todos.getOneTodo(todoId);

  return todo;
};

const createNewTodo = (newTodo) => {
  const todoToInsert = {
    id: uuid(),
    ...newTodo,
    is_completed: false,
    created_at: new Date().toLocaleString("fr-CA", {
      timeZone: "America/Montreal",
    }),
  };

  const createdTodo = todos.createNewTodo(todoToInsert);

  return createdTodo;
};

const updateOneTodo = () => {
  return;
};

const deleteOneTodo = () => {
  return;
};

module.exports = {
  getAllTodos,
  getOneTodo,
  createNewTodo,
  updateOneTodo,
  deleteOneTodo,
};
