import "./styles.css";
import Lista from "./lista.js";
import Form from "./Form/form.js";
import React, { useState } from "react";

export default function App(props) {
  const [itemList, setItemList] = useState([
    { id: "tarefa-2", name: "Dormir", completed: true }
  ]);

  const AddItemLista = (tarefa, limparCampo) => {
    setItemList([...itemList, tarefa]);
    limparCampo();
  };

  const listaTarefas = itemList.map((task) => (
    <Lista
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div
      className="container w-75 mx-auto
          text-center bg-light bg-opacity-50 p-5 m-5 rounded"
    >
      <h1>Lista de Tarefas</h1>
      <Form AddItemLista={AddItemLista} />
      <div className="filtros btn-group stack-exception">
        <button type="button" className="btn btn-primary">
          <span className="esconder">Mostrar </span>
          <span>toda as </span>
          <span className="esconder">Tarefas</span>
        </button>

        <button type="button" className="btn btn-primary">
          <span className="esconder">Mostrar </span>
          <span className="esconder">Tarefas </span>
          <span>ativas</span>
        </button>

        <button type="button" className="btn btn-primary">
          <span className="esconder">Mostrar </span>
          <span className="esconder">Tarefas </span>
          <span>completadas</span>
        </button>
      </div>

      <h2 id="lista-heading">Tarefas Restantes</h2>
      <ul className="lista stack-large stack-exception">{listaTarefas}</ul>
    </div>
  );
}
