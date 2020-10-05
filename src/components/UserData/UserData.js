import React from 'react';

export default function UserData(props) {
  if(props.userData) {
    return (
      <div> 
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title"> {props.userData.denominacion} </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">id: {props.userData.id}</li>
                <li className="list-group-item">categoria: {props.userData.categoria}</li>
                <li className="list-group-item">tipo: {props.userData.tipo}</li>
                <li className="list-group-item">direccion: {props.userData.direccion}</li>
                <li className="list-group-item">email: {props.userData.email}</li>
                <li className="list-group-item">telefono: {props.userData.telefono}</li>
                <li className="list-group-item">saldo: {props.userData.saldo}</li>
                <li className="list-group-item">domicilio_fiscal: {props.userData.domicilio_fiscal}</li>
                <li className="list-group-item">riesgo_fiscal: {props.userData.riesgo_fiscal}</li>
                <li className="list-group-item">situacion_fiscal: {props.userData.situacion_fiscal}</li>
                <li className="list-group-item">id_externo: {props.userData.id_externo}</li>
              </ul>
            </div>
          </div>
      </div>
    );
  } else {
    return null;
  }
}