import { useContext } from "react";
import { TodoContext } from "../../context";
import "./CreateTodoButton.css";

export function CreateTodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext)

  const onClickButton = () => {
    setOpenModal(!openModal)
  };

  return (
    <button
      onClick={onClickButton}
      className="CreateTodoButton"
    >
      +
    </button>
  );
}
