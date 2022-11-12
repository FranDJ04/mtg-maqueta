import React, { useState } from "react";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { Placement } from "react-bootstrap/esm/Overlay";
// import InputMask from "react-input-mask"

interface TextBoxType {
  name: string,
  placeholder?: string,
  children: any,
  error: any,
  register: any,
  mask?: any,
  tooltip?:any, //Placement,
  readOnly?:boolean,
  maxLength?:number,
  onChange?:any
}

const TextBox = ({name, error, children, register, placeholder, mask, tooltip, readOnly, maxLength, onChange}: TextBoxType) => {
    const [focus, setFocus] = useState(false);
    const [largo, setLargo] = useState(1);

    function mascara(){
        switch(mask){
            case 'nombre':
                return /[a-zA-Z 'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜâêîôûÂÊÎÔÛàèìòùÀÈÌÒÙ]/;
            case 'email':
                return /[a-zA-Z0-9@.-_]/;
            case 'numero':
                return /[0-9]/;
            default:
                return mask;
        }
    }
    function onKeys(e:any) {
        if([8,46,35,36,37,39,17].includes(e.keyCode)) return;
        if(e.keyCode==86 && e.ctrlKey) return;  //paste
        if(e.keyCode==67 && e.ctrlKey) return;  //copy
        if(e.keyCode==88 && e.ctrlKey) return;  //cut
        let OK = mascara().exec(e.key);
        if (!OK) {
            e.preventDefault();
        }
    } 
    const handleFocus = (e:any) => {
        if(mask=='rut') {
            setFocus(true);
        }
        e.target.select(); 
    }
    const handleLostFocus = (e:any) => {
        if(mask=='rut') {
            const valor = e.target.value;
            setLargo (valor.length + 1)
            setFocus(false);
            var rut = valor.substring(0, (valor.length-1)) + '-' + valor[valor.length-1];
            onChange(rut);
        }
    } 
    return (
        <div className="col-lg-12 form-group">
            {/* <label htmlFor={name}>{children}</label> */}
            {/* <OverlayTrigger
                placement={tooltip!=undefined ? tooltip : "right"}
                delay={{ show: 250, hide: 400 }}
                overlay={error ? <Tooltip id="button-tooltip-2">{error?.message}</Tooltip> : <span></span>}
                show={error!=undefined}
            > */}
            {mask != null ? 
                <input 
                    className={`form-control ${error ? 'is-invalid' : ''}`} 
                    autoComplete="off" 
                    placeholder={placeholder}
                    readOnly={readOnly??false}
                    maxLength={maxLength ?? 9999}
                    onFocus={handleFocus}
                    onKeyDown={onKeys}
                    {...register(name)}
                />            
            :
                <input type={(name=='mail') ? "email" : "text"}
                    className={`form-control ${error ? 'is-invalid' : ''}`} 
                    autoComplete="off" 
                    placeholder={placeholder}
                    readOnly={readOnly??false}
                    onFocus={handleFocus}
                    {...register(name)}
                />            
            }
            {/* </OverlayTrigger> */}
            {/*<div className="invalid-feedback">{error?.message}</div>*/}
        </div>
    );
};
  
export {TextBox}