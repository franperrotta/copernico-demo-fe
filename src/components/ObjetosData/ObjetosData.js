import React from 'react';

export default function ObjetosData(props) {
  if(props.objetosData) {
    return (
      <React.Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">OBJETOS</li>
          </ol>
        </nav>
        <table className="table table-dark objetosTable">
            <thead>
                <tr>
                <th scope="col">Objeto</th>
                <th scope="col">Obligaciones</th>
                <th scope="col">tipo</th>
                <th scope="col">categoria</th>
                <th scope="col">descripcion</th>
                <th scope="col">estado</th>
                <th scope="col">fecha_fin</th>
                <th scope="col">fecha_inicio</th>
                <th scope="col">saldo</th>
                <th scope="col">base_imponible</th>
                <th scope="col">etiquetas</th>
                <th scope="col">id_externo</th>
                <th scope="col">datos_adicionales</th>
                <th scope="col">Motivo de excepcion</th>
                </tr>
            </thead>
            <tbody>
                {props.createTableObjetos()}
            </tbody>
        </table>
      </React.Fragment>
    );
  } else {
    return null;
  }
}