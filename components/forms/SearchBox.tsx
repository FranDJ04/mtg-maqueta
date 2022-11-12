import React, { useState, useRef, useEffect } from 'react';
// import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface SearchBoxType {
    name: string,
    placeholder: string,
    children: any,
    error: any,
    mask?: any,
    dataHost?: any,
    minimun?: number,
    onValue?: any,
    parentFilter?: any,
    parentMessage?: string
}

const ShowInitialState = (props: any) => {
    if (props.filter != null) return null
    if (props.parentFilter != null && props.parentFilter == 0) return null
    return (
        <li>
            <span className="dropdown-item d-flex align-items-center gap-2 py-2 disabled">
                ingrese {props.minimun ?? 3} caracteres para la busqueda...
            </span>
        </li>
    )
}
const ShowPrecondition = (props: any) => {
    if (props.filter != null) return null
    if (props.parentFilter == undefined || props.parentFilter == null) return null
    if (props.parentFilter != null && props.parentFilter != 0) return null
    return (
        <li>
            <span className="dropdown-item d-flex align-items-center gap-2 py-2 disabled">
                {props.parentMessage}...
            </span>
        </li>
    )
}
const ShowNotFound = (props: any) => {
    if (props.filter == null) return null
    if (props.filter.length > 0) return null
    return (
        <li>
            <span className="dropdown-item d-flex align-items-center gap-2 py-2 disabled">
                busqueda sin resultados
            </span>
        </li>)
}

const SearchBox = ({ name, error, children, placeholder, dataHost, parentFilter, parentMessage, onValue, minimun }: SearchBoxType) => {
    const [focus, setFocus] = useState<boolean | null>(null);
    const [value, setValue] = useState('');
    const [selected, setSelected] = useState<any>();
    const [filter, setFilter] = useState<[] | null>(null);
    const [parent, setParent] = useState<[] | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: any) => {
        if (parentFilter != undefined && parentFilter != null && (parentFilter == 0 || parentFilter == '0@')) return null
        let valor = e.target.value;
        setValue(valor);
        //setSelected(null);
        setFilter(null);
        if (valor.length >= (minimun ?? 3)) {
            if (parentFilter != null) {
                dataHost(valor, parentFilter).then((d: any) => {
                    setFilter(d);
                });
            } else {
                dataHost(valor).then((d: any) => {
                    setFilter(d);
                });
            }
        }
    }
    const handleDropdrown = (e: any) => {
        setFocus(false);
        if (selected?.id == e?.id) return;
        setSelected(e);
        setValue(e.nombre);
    }

    useEffect(() => {
        if (selected === undefined) return;
        if (onValue === undefined) return;
        onValue(selected);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    useEffect(() => {
        if (minimun == null) return;
        if (minimun == 0) {
            handleChange({ target: { value: value } });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minimun, parentFilter]);

    useEffect(() => {
        if (parentFilter === undefined) return;
        if (parentFilter == parent) return;
        setParent(parentFilter)
        setValue('');
        setSelected(null);
        setFilter(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parentFilter]);

    useEffect(() => {
        if (focus == null) return;
        const backDropHandler = (e: any) => {
            if (!wrapperRef?.current?.contains(e.target)) {
                if (!wrapperRef?.current?.contains(document.activeElement)) {
                    setTimeout(() => {
                        window.removeEventListener('click', backDropHandler);
                        setFocus(false);
                    }, 0);
                }
            }
        }
        if (focus) {
            window.removeEventListener('click', backDropHandler);
            window.addEventListener('click', backDropHandler);
            if (selected != null)
                handleChange({ target: { value: selected.nombre } })
        } else {
            if (selected != null)
                setValue(selected.nombre);
            window.removeEventListener('click', backDropHandler);
        }
        return () => {
            window.removeEventListener('click', backDropHandler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focus]);
    const handleFocus = (e: any) => {
        setFocus(true);
        e.target.select();
    }
    return (
        <div className="w-100 position-relative form-group" ref={wrapperRef}>
            {/* <label htmlFor={name}>{children}</label> */}

            {/* <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={error ? <Tooltip id="button-tooltip-2">{error?.message}</Tooltip> : <span></span>}
                show={error ? true : false}
            > */}
            <div>
                <i className="position-absolute p-2 m-1" style={{ "display": (focus ? "block" : "none") }}>🔍</i>
                <input
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    style={{ "paddingLeft": (focus ? "2.5rem" : "0.75rem"), "borderRadius": (focus ? "0.25rem 0.25rem 0 0" : "0.25rem") }}
                    autoComplete="off"
                    placeholder={placeholder}
                    value={value}
                    onFocus={handleFocus}
                    onChange={handleChange}
                />
            </div>
            {/* </OverlayTrigger> */}
            <div className="dropdown-menu pt-0 rounded-bottom shadow overflow-hidden" style={{ "borderRadius": "0 0 0.3rem", "width": "100%", "display": (focus ? "block" : "none") }}>
                <ul className="list-unstyled mb-0" onFocusCapture={() => setFocus(true)} tabIndex={0}>
                    <ShowInitialState {...{ filter, parentFilter, minimun }} />
                    <ShowPrecondition {...{ filter, parentFilter, parentMessage }} />
                    <ShowNotFound {...{ filter, parentFilter }} />
                    {filter?.map((v: any, i: number) => {
                        return (
                            <li key={i} onClickCapture={() => handleDropdrown(v)}>
                                <div
                                    className={"dropdown-item d-flex align-items-center gap-2 py-2 " + ((v.id == 0) ? " disabled" : "")}
                                >
                                    {v.nombre}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/*<div className="invalid-feedback">{error?.message}</div>*/}
        </div>
    );
};

export { SearchBox }