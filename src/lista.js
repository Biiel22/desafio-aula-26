export default function Lista(props) {
  return (
    <li className="lista list-group">
      <div className="itens">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          className="form-check-label"
        />
        <label className="form-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-success">
          Editar <span className="visually-hidden">{props.name}</span>
        </button>

        <button type="button" className="btn btn-danger">
          Apagar <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
