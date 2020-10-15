import React, { useState } from 'react';
import './App.css';

import CuitForm from './components/CuitForm/CuitForm';
import UserData from './components/UserData/UserData';
import ObjetosData from './components/ObjetosData/ObjetosData';
import ObligacionesData from './components/ObligacionesData/ObligacionesData';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
 
  const [cuit, setcuit] = useState('');
  const [userData, setUserData] = useState(null);
  const [objetosData, setobjetosData] = useState(null);
  const [obligacionesData, setobligacionesData] = useState(null);
  const [error, setError] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const clean = () => {
    setSpinner(false);
    setcuit('');
    setUserData(null);
    setobjetosData(null);
    setobligacionesData(null);
    setError(null);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSpinner(true);
    fetch(`${process.env.REACT_APP_BFF.trim()}/webbff/sujetos/${cuit}/objetos/obligaciones`, {headers: { accept: 'application/json' }})
      .then(response => response.json())
      .then(
        response => {
          setSpinner(false);
          if(response.error) {
            setUserData(null);
            setobjetosData(null);
            setobligacionesData(null);
            setError(response.error)
          } else {
            setobjetosData(response.objetos);
            delete response.objetos;
            setUserData(response);
            setError(null);
          }
        }
      )
      .catch(error => {
        setSpinner(false);
        setError(error);
      })
  }

  const createTableObjetos = () => objetosData.map((objeto, i) => {
    return(
        <tr key={i}>
            <td>{objeto['id']}</td>
            <td> 
              <button type="button" className="btn btn-light"  data-toggle="tooltip" data-placement="top" title="Ver las obligaciones del objeto" onClick={(e) => setobligacionesData(objeto['obligaciones'])}>Obligaciones</button>
            </td>
            <td>{objeto['tipo']}</td>
            <td>{objeto['categoria']}</td>
            <td>{objeto['descripcion']}</td>
            <td>{objeto['estado']}</td>
            <td>{objeto['fecha_fin']}</td>
            <td>{objeto['fecha_inicio']}</td>
            <td>{objeto['saldo']}</td>
            <td>{objeto['base_imponible']}</td>
            <td>{objeto['etiquetas']}</td>
            <td>{objeto['id_externo']}</td>
            <td>{objeto['datos_adicionales'] ? objeto['datos_adicionales'].SOJ_DETALLES : null}</td>
            <td>{ (objeto['objetosExcepciones']) ? objeto['objetosExcepciones']['motivo'] : null }</td>
        </tr>
    )
  });

  const createTableObligaciones = () => obligacionesData.map((obligacion, i) => {
    return(
        <tr key={i}>
            <td>{obligacion['id']}</td>
            <td>{obligacion['capital']}</td>
            <td>{obligacion['cuota']}</td>
            <td>{obligacion['estado']}</td>
            <td>{obligacion['fiscalizada']}</td>
            <td>{obligacion['indice_interes_punitorio']}</td>
            <td>{obligacion['indice_interes_resarcitorio']}</td>
            <td>{obligacion['interes_punitorio']}</td>
            <td>{obligacion['interes_resarcitorio']}</td>
            <td>{obligacion['juicio_id']}</td>
            <td>{obligacion['periodo']}</td>
            <td>{obligacion['plan_id']}</td>
            <td>{obligacion['prorroga']}</td>
            <td>{obligacion['tipo']}</td>
            <td>{obligacion['total']}</td>
            <td>{obligacion['saldo']}</td>
            <td>{obligacion['vencimiento']}</td>
            <td>{obligacion['concepto']}</td>
            <td>{obligacion['impuesto']}</td>
            <td>{obligacion['exenta']}</td>
            <td>{obligacion['porcentaje_exencion']}</td>
            <td>{ (obligacion['obligacionExceptuada']) ? obligacion['obligacionExceptuada']['motivo'] : null }</td>
            <td>{obligacion['interesRecargo']}</td>
            <td>{obligacion['saldoConRecargo']}</td>
            <td>{obligacion['descuento']}</td>
        </tr>
    )
  });



  return (
    <div>
      <CuitForm handleSubmit={handleSubmit} cuit={cuit} setcuit={setcuit} clean={clean} userData={userData} error={error}/>
      {
        spinner ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <UserData userData={userData} />
            <ObjetosData objetosData={objetosData} createTableObjetos={createTableObjetos}/>
            <ObligacionesData obligacionesData={obligacionesData} createTableObligaciones={createTableObligaciones}/>
          </div>
        )
      }
      <ErrorMessage error={error} />
    </div>
  );
}

export default App;
