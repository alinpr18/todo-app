import { useContext } from "react";
import { TodoContext } from "../../context";
import "./TodoSearch.css";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Busca un todo..."
      type="text"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}
