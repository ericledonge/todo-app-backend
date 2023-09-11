const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllTodos = () => {
  return DB.todos;
};

const getOneTodo = (todoId) => {
  const todo = DB.todos.find((todo) => todo.id === todoId);

  console.log(todo);

  if (!todo) {
    return null;
  }

  return todo;
};

const createNewTodo = (newTodo) => {
  const isAlreadyExist = DB.todos.find(
    (todo) => todo.user_id === newTodo.user_id && todo.title === newTodo.title,
  );

  if (isAlreadyExist) {
    return null;
  }

  DB.todos.push(newTodo);
  saveToDatabase(DB);

  return newTodo;
};

module.exports = {
  getAllTodos,
  getOneTodo,
  createNewTodo,
};
