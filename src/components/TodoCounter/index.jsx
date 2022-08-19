import { useContext } from "react";
import { TodoContext } from "../../context";
import "./TodoCounter.css";

export function TodoCounter() {
  const {
    completedTodos,
    totalTodos } = useContext(TodoContext)

  return (
    <h2 className="TodoCounter" >
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}
