import { useContext } from 'react';
import "./App.css";
import { MyLoader } from './components/ContentLoader';
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from './components/Modal';
import { TodoCounter } from "./components/TodoCounter";
import { TodoForm } from './components/TodoForm';
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContext } from "./context";

export default function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error ? (
          <p>Opss, hubo un error</p>
        ) : loading ? (
          <>
            <MyLoader />
            <MyLoader />
            <MyLoader />
          </>
        ) : (
          searchedTodos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
        )}
      </TodoList>
      {!!openModal &&
        <Modal>
          <TodoForm />
        </Modal>
      }
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}
