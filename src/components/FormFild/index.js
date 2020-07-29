import React from 'react';

// import { Container } from './styles';

function FormFild({ label, type = 'text', name, value, onChange }) {
    if (type === 'textarea') {
        return (

            <div>
                <label>
                    {label}:
                <textarea name={name} value={value} onChange={onChange}></textarea>
                </label>
            </div>
        )
    }
    // console.log({ type })
    return (
        <div>

            <label>
                {label}:
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange} />
            </label>
        </div>
    );
}

export default FormFild;