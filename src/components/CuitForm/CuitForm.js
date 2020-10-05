import React from 'react';

export default function CuitForm(props) {
    return (
    <div className="header">
        <nav className="navbar navbar-dark bg-dark">
                <h1 className="navbar-brand">COPERNICO DATA VIEW</h1>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" value={props.cuit} placeholder="Buscar por cuit" aria-label="Search" onChange={(e) => props.setcuit(e.target.value)}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.handleSubmit}>Buscar</button>
                    { props.userData || props.error ? <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.clean}>Limpiar</button> : null }
                </form>
        </nav>
    </div>);
}