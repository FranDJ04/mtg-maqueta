import { useRouter } from "next/router";
import { useState } from "react";
import Menu from "./_menu";

const Header = () => {
  const { pathname } = useRouter();
  const [show, setShow] = useState(false)

  return (
    <header>
      <Menu show={show}/>
      <div className="header-main d-flex">
        <div className="row col-lg-12 d-flex align-items-center justify-content-between">
          <div className="col-6 col-lg-2">
            <a href="/">
              <img
                className="logo d-none d-xl-block"
                src="/logo.png"
                alt="metrogas"
              />
              <img
                className="logo d-block d-xl-none"
                src="/logo-mobile.png"
                alt="metrogas"
              />
            </a>
          </div>
          <div className="col-6 d-flex titulo botonera col-lg-10 justify-content-end">
            
          {pathname == "/" && ( 
              <h1 style={{ color: "#23a6f0" }} className="text-center d-none d-lg-block">
                {" "}
                Gas natural seguro y conveniente
              </h1> 
          )}
            <a href="/#">
              <button
                type="button"
                className="btn btn-primary d-none d-md-block"
              >
                Paga tu cuenta
              </button>
            </a>
            <a href="/#">
              <button
                type="button"
                className="btn btn-primary d-none d-md-block"
              >
                Emergencias
              </button>
            </a>
            <a href="/#">
              <button
                type="button"
                className="btn btn-primary d-none d-md-block"
              >
                Cont&aacute;ctanos
              </button>
            </a>            
            <a
              href="/#"
            >
              <button
                type="button"
                className="btn btn-secondary d-none d-sm-block"
              >
                <img src="/iconos/user.svg" alt="user" />
              </button>
            </a>
            <button type="button" className="btn btn-third d-block d-sm-none" onClick={()=>setShow(!show)}>
              <img src="/iconos/menu.svg" alt="menu" style={{transform: (show ? 'rotate(90deg)' : 'rotate(0deg)')}} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
