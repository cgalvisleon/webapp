import { useState } from "react";
import "./App.css";

function Apps() {
  const [count, setCount] = useState(0);

  const handlerInsert = () => {
    console.log("Insertar");
  };

  const handlerEdit = () => {
    console.log("Editar");
  };

  const handlerDelete = () => {
    console.log("Eliminar");
  };

  return (
    <>
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title">Formulario</h5>
            <div className="mb-3">
              <label className="form-label">Numero de identificación</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Apellidos</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Tipo de identificacion</label>
              <div className="input-group">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="card-body">
            <button
              type="button"
              disabled=""
              className="btn btn-success"
              onClick={() => handlerInsert()}
            >
              Insertar
            </button>
            <button
              type="button"
              disabled=""
              className="btn btn-primary"
              onClick={() => handlerEdit()}
            >
              Editar
            </button>
            <button
              type="button"
              disabled=""
              className="btn btn-outline-danger"
              onClick={() => handlerDelete()}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Apps;
