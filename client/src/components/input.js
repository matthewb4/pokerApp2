import React, {Component} from 'react';

function Input({type, name, value, onChange, label, errors})
{
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input 
                type={type}
                name={name}
                value={value} 
                className="form-control" 
                id={name} 
                onChange={onChange} 
            />
            {errors && errors.map((error, index) => <div key={index} className="alert alert-danger my-2" role="alert">{error}</div>)}
        </div>
    );
}

export default Input;