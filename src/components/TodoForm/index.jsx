import { useContext, useState } from "react"
import { TodoContext } from "../../context"
import './TodoForm.css'

export function TodoForm() {
  const [value, setValue] = useState('')

  const {
    addTodo,
    setOpenModal
  } = useContext(TodoContext)

  const onChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(value)
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Añde un nuevo todo</label>
      <textarea
        cols="30"
        rows="10"
        value={value}
        onChange={onChange}
        placeholder="Escribe aquí"
      />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
        <button className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  )
}
