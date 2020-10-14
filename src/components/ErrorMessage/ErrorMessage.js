import React from 'react';

export default function ErrorMessage(props) {
    if(props.error) {
        return (
            <div className="alert alert-danger errorMessage" role="alert">
                { 
                    props.error.statusCode === 404 
                        ? props.error.message.includes('No existe un objeto asociado para el sujeto')
                            ? props.error.message
                            : props.error.message.includes('Endpoint "GET /sujetos//objetos/obligaciones" not found.') 
                                ? 'Endpoint {/sujetos//objetos/obligaciones} no encontrado.'
                                : `El sujeto asociado al cuit ingresado no se encuentra en la base de datos.`
                        : props.error.statusCode === 500 
                            ? `El servidor no responde.`
                            : props.error.message
                }
            </div>
        );
    } else {
        return null;
    }

}