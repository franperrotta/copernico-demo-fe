import React from 'react';

export default function ErrorMessage(props) {
    if(props.error) {
        return (
            <div className="alert alert-danger errorMessage" role="alert">
                { props.error.statusCode } <br/>
                { props.error.message }
            </div>
        );
    } else {
        return null;
    }

}