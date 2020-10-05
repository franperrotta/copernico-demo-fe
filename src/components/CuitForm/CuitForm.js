import React from 'react';

export default function CuitForm(props) {
    return (
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="navbar-brand">COPERNICO</h1>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" defaultValue={props.cuit} placeholder="Buscar por cuit" aria-label="Search" onChange={(e) => props.setcuit(e.target.value)}/>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.handleSubmit}>Buscar</button>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.clean}>Limpiar</button>
                    </div>
                </div>
        </nav>
    </div>);
}