const todoService = require("../services/todoService");

// To improve the request validation you normally would use a third party package like express-validator.

const getAllTodos = (req, res) => {
  const allTodos = todoService.getAllTodos();
  res.send({ status: "OK", data: allTodos });
};

const getOneTodo = (req, res) => {
  const {
    params: { todoId },
  } = req;

  console.log(todoId);

  if (!todoId) {
    res.status(400).send({ status: "ERROR", message: "TodoId is required" });
    return;
  }

  const todo = todoService.getOneTodo(todoId);
  res.send({ status: "OK", data: todo });
};

const createNewTodo = (req, res) => {
  const { body } = req;

  if (!body.user_id) {
    res.status(400).send({ status: "ERROR", message: "UserId is required" });
    return;
  }

  if (!body.title) {
    res.status(400).send({ status: "ERROR", message: "Title is required" });
    return;
  }

  const newTodo = {
    user_id: body.user_id,
    title: body.title,
  };

  const createdTodo = todoService.createNewTodo(newTodo);
  res.status(201).send({ status: "OK", data: createdTodo });
};

const updateOneTodo = (req, res) => {
  const updatedTodo = todoService.updateOneTodo();
  res.send("Update an existing todo");
};

const deleteOneTodo = (req, res) => {
  todoService.deleteOneTodo();
  res.send("Delete an existing todo");
};

module.exports = {
  getAllTodos,
  getOneTodo,
  createNewTodo,
  updateOneTodo,
  deleteOneTodo,
};
