import React, { useState } from 'react';

interface InputAreaType {
    name: string, 
    placeholder?: string, 
    form: any,
    readonly?: boolean,
    children?: string,
    limit?: number
}

const InputArea = ({ children, name, placeholder, form, readonly=false, limit = 150 }: InputAreaType) => {
    const [largo, setLargo] = useState(0);
    return (
        <div className="">
            {children &&
            <label htmlFor={name} className="form-label" style={{ color:"white"}}>{children}</label>
            }
            <textarea 
                className={`form-control ${form.formState.errors?.[name] ? 'is-invalid' : ''}`} 
                rows={4} {...form.register(name)} 
                placeholder={placeholder}
                maxLength={limit}
                onKeyUp={(e:any) => setLargo(e.target.value.length)}
                onPaste={(e:any) => setLargo(e.target.value.length)}
            ></textarea>
            <div className='text-right' style={{fontSize: '0.8rem'}}>{largo} de {limit}</div>
            <div className="invalid-feedback d-block">{form.formState.errors?.[name]?.message}</div>
        </div>
    )
}
export { InputArea }