const Servicios = () => {
  return (
    <>
      <div className="row align-items-center home4 mt-5">
        <div className="col-lg-4 d-flex home4-left justify-content-between flex-column">
          <div>&nbsp;</div>
          <span>
            <b>Conoce nuestros servicios</b>
          </span>
        </div>
        <div className="col-lg-8">
          <div className="row bordes align-items-center justify-content-center">
            <div className="col-lg-4 col-xl-3 mb-3">
              <a href="/industria">
                <div className="d-flex opcion opcion-one">
                  <div className="d-flex flex-wrap justify-content-between text-left">
                    <div>
                      <span>Gas Natural</span>
                      <span className="mb-2">
                        {" "}
                        <b> para Industrias </b>
                      </span>
                    </div>
                    <img
                      alt="gas-industrias"
                      src="/imagenes/gas-industrias.svg"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-xl-3 mb-3">
              <a href="/comercios">
                <div className="d-flex opcion opcion-two">
                  <div className="d-flex flex-wrap justify-content-between text-left">
                    <div>
                      <span>Gas Natural</span>
                      <span className="mb-2">
                        {" "}
                        <b> para Comercio </b>
                      </span>
                    </div>
                    <img
                      width="65px"
                      height="65px"
                      alt="gas-comercio"
                      src="/imagenes/gas-comercio.svg"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-xl-3 mb-3">
              <a href="/gas-natural-hogar">
                <div className="d-flex opcion opcion-three">
                  <div className="d-flex flex-wrap justify-content-between text-left">
                    <div>
                      <span>Gas Natural</span>
                      <span className="mb-2">
                        {" "}
                        <b> para tu Hogar </b>
                      </span>
                    </div>
                    <img
                      width="65px"
                      height="65px"
                      alt="gas-hogar"
                      src="/imagenes/gas-hogar.svg"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row bordes align-items-center justify-content-center">
            <div className="col-lg-4 col-xl-3 mb-3">
              <a href="/inmobiliarias">
                <div className="d-flex opcion opcion-four">
                  <div className="d-flex flex-wrap justify-content-between text-left">
                    <div>
                      <span>
                        <b> Proyecto </b>
                      </span>
                      <span className="mb-2">
                        <b> Inmobiliario </b>
                      </span>
                    </div>
                    <img
                      width="65px"
                      height="65px"
                      alt="proyecto-inmobiliario"
                      src="/imagenes/proyecto-inmobiliario.svg"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-xl-3 mb-3">
              <a href="/comunidades">
                <div className="d-flex opcion opcion-five">
                  <div className="d-flex flex-wrap justify-content-between text-left">
                    <div>
                      <span>Metrogas</span>
                      <span className="mb-3">en tu Comunidad</span>
                    </div>
                    <img
                      width="65px"
                      height="65px"
                      alt="comunidad"
                      src="/imagenes/comunidad.svg"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-xl-3 mb-3">
              <a href="/fonored">
                <div className="d-flex opcion opcion-six">
                  <div className="d-flex flex-wrap justify-content-between text-left">
                    <div>
                      <span>
                        {" "}
                        <b> Fonored:</b>
                      </span>
                      <span className="mb-3">llámanos antes de excavar</span>
                    </div>
                    <img
                      width="80px"
                      height="80px"
                      alt="fonored"
                      src="/iconos/fonored-icono.png"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex home4-left justify-content-between flex-column" style={{height: "auto"}}>
          <div className="d-none d-md-block">&nbsp;</div>
          <div className="row amarillo-base d-none d-lg-block">&nbsp;</div>
        </div> 
      </div>
    </>
  );
};

export default Servicios;
