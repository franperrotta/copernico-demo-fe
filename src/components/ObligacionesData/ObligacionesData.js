import React from 'react';

export default function ObligacionesData(props) {
  if(props.obligacionesData) {
    return (
        <table className="table table-dark obligacionesTable">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">capital</th>
                <th scope="col">cuota</th>
                <th scope="col">estado</th>
                <th scope="col">fiscalizada</th>
                <th scope="col">indice_interes_punitorio</th>
                <th scope="col">indice_interes_resarcitorio</th>
                <th scope="col">interes_punitorio</th>
                <th scope="col">interes_resarcitorio</th>
                <th scope="col">juicio_id</th>
                <th scope="col">periodo</th>
                <th scope="col">plan_id</th>
                <th scope="col">prorroga</th>
                <th scope="col">tipo</th>
                <th scope="col">total</th>
                <th scope="col">saldo</th>
                <th scope="col">vencimiento</th>
                <th scope="col">concepto</th>
                <th scope="col">impuesto</th>
                <th scope="col">exenta</th>
                <th scope="col">porcentaje_exencion</th>
                <th scope="col">Exceptuada</th>
                <th scope="col">interesRecargo</th>
                <th scope="col">saldoConRecargo</th>
                <th scope="col">descuento</th>
                </tr>
            </thead>
            <tbody>
                {props.createTableObligaciones()}
            </tbody>
        </table>
    );
  } else {
    return null;
  }
}