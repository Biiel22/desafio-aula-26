import React, { useState } from "react";

export default function Form(props) {
  const [task, setTask] = useState("");

  function pegarInputUser(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  function limparCampo() {
    setTask("");
  }

  return (
    <form>
      <h2 className="">
        <label>O que eu preciso fazer?</label>
      </h2>
      <input
        type="text"
        id="nova-tarefa-input"
        className="input-group rounded"
        name="text"
        autoComplete="off"
        onChange={pegarInputUser}
        value={task}
      />
      <button
        type="submit"
        className="m-1 btn btn-warning"
        onClick={(event) => {
          event.preventDefault();
          props.AddItemLista({ name: task, completed: false }, limparCampo);
        }}
      >
        Adicionar
      </button>
    </form>
  );
}
