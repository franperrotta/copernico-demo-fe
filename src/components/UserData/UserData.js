import React from 'react';

export default function UserData(props) {
  if(props.userData) {
    return (
      <React.Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">SUJETO</li>
          </ol>
        </nav>
        <table className="table table-dark">
          <thead>
              <tr>
                <th scope="col">cuit</th>
                <th scope="col">categoria</th>
                <th scope="col">tipo</th>
                <th scope="col">direccion</th>
                <th scope="col">email</th>
                <th scope="col">telefono</th>
                <th scope="col">saldo</th>
                <th scope="col">domicilio_fiscal</th>
                <th scope="col">riesgo_fiscal</th>
                <th scope="col">situacion_fiscal</th>
                <th scope="col">id_externo</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td>{props.userData.id}</td>
                <td>{props.userData.categoria}</td>
                <td>{props.userData.tipo}</td>
                <td>{props.userData.direccion}</td>
                <td>{props.userData.email}</td>
                <td>{props.userData.telefono}</td>
                <td>{props.userData.saldo}</td>
                <td>{props.userData.domicilio_fiscal}</td>
                <td>{props.userData.riesgo_fiscal}</td>
                <td>{props.userData.situacion_fiscal}</td>
                <td>{props.userData.id_externo}</td>
              </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  } else {
    return null;
  }
}