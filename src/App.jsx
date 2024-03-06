import { useEffect, useState } from "react";
import "./App.css";
import { GetFormularios } from "./components/api";

const defaultState = {
  numIdentificacion: "",
  nombre: "",
  apellidos: "",
};

function Apps() {
  const [data, setData] = useState(defaultState);
  const [formularios, setFormularios] = useState([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await GetFormularios();
      const { result } = response;
      const { formularios } = result;
      const formulario = formularios[idx];
      setFormularios(formularios);
      setData(formulario);
    }

    fetchData();
  }, []);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // setData({ ...data, [name]: value });
  };

  const handlerInsert = () => {
    console.log("Insertar");
  };

  const handlerEdit = () => {
    console.log("Editar");
  };

  const handlerDelete = () => {
    console.log("Eliminar");
  };

  const handlerNext = () => {
    const _idx = idx + 1;
    const _data = formularios[_idx];
    setData(_data);
    setIdx(_idx);
  };

  const handlerPrev = () => {
    const _idx = idx - 1;
    const _data = formularios[_idx];
    setData(_data);
    setIdx(_idx);
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
                  value={data.numIdentificacion}
                  onChange={(e) => handlerChange(e)}
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
                  value={data.nombre}
                  onChange={(e) => handlerChange(e)}
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
                  value={data.apellidos}
                  onChange={(e) => handlerChange(e)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Tipo de identificacion</label>
              <div className="input-group">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Seleccione una opción</option>
                  <option value="1">Cedula</option>
                  <option value="2">Pasaporte</option>
                  <option value="3">Cedula de extranjería</option>
                </select>
              </div>
            </div>
          </div>
          <div className="card-body">
            <button
              type="button"
              disabled=""
              className="btn btn-success me-2"
              onClick={() => handlerInsert()}
            >
              Insertar
            </button>
            <button
              type="button"
              disabled=""
              className="btn btn-primary me-2"
              onClick={() => handlerEdit()}
            >
              Editar
            </button>
            <button
              type="button"
              disabled=""
              className="btn btn-outline-danger me-2"
              onClick={() => handlerDelete()}
            >
              Eliminar
            </button>
            <button
              type="button"
              disabled=""
              className="btn btn-outline-danger me-2"
              onClick={() => handlerNext()}
            >
              Siguiente
            </button>
            <button
              type="button"
              disabled=""
              className="btn btn-outline-danger me-2"
              onClick={() => handlerPrev()}
            >
              Anterior
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Apps;
