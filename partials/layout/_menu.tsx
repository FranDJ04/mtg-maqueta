/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react"

const Menu = ({ show }: any) => {
    const [menu, setMenu] = useState(false)
    return (
        <div className="menu">
            <nav className="navbar navbar-expand-lg">
                <div className={`collapse navbar-collapse justify-content-end ${show ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item dropdown ${menu ? 'show' : ''}`} onMouseOver={() => setMenu(true)} onMouseLeave={() => setMenu(false)} onClick={() => setMenu(!menu)}>
                            <a className="nav-link dropdown-toggle" >Grandes Clientes <span className="sr-only">(current)</span></a>
                            <div className={`dropdown-menu ${menu ? 'show' : ''}`} >
                                <a className="dropdown-item" href="/#">Comercios</a>
                                <a className="dropdown-item" href="/#">Inmobiliarias</a>
                                <a className="dropdown-item" href="/#">Comunidades</a>
                                <a className="dropdown-item" href="/#">Industrias</a>
                                <a className="dropdown-item" href="/#">GNL Móvil</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">El gas natural</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Nuestra Empresa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Inversionistas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-block d-md-none" href="/#">
                                Contáctanos
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Menu
