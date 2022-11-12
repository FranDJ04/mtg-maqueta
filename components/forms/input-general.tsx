import React from 'react';

interface InputGeneralType {
    name: string,
    type: "text" | "date" | "time" | "number" | "url" | "textarea" | "email" | "password",
    placeholder?: string,
    errors: any,
    register: any,
    readonly?: boolean,
    children?: string,
}

const InputGeneral = ({ children, name, placeholder, type, register, errors, readonly=false }: InputGeneralType) => {
    return (
        <div className="">
            {children &&
            <label htmlFor={name} className="form-label" style={{ color:"white"}}>{children}</label>
            }
            {type == "textarea" ?
                <textarea className={`form-control ${errors?.[name] ? 'is-invalid' : ''}`} rows={4} {...register(name)} placeholder={placeholder}></textarea>
            :
                <input type={type} className={`form-control ${errors?.[name] ? 'is-invalid' : ''}`}  autoComplete="off" {...register(name)} placeholder={placeholder} readOnly={readonly} />
            }
            
            <div className="invalid-feedback d-block">{errors?.[name]?.message}</div>
        </div>
    )
}
export { InputGeneral }