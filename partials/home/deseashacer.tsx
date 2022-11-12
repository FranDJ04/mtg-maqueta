import { useState } from "react";
const DeseasHacer = () => {
  const [option, setOption] = useState(1);
  function myToggleFunction() {
    if (window.videsk) window.videsk.toggle();
  }
  return (
    <>
      <div className="row align-items-center home3">
        <div className="col-lg-4 d-flex home3-left justify-content-between flex-column">
          <div>&nbsp;</div>
          <span>
            <b>¿Qué deseas hacer?</b>
          </span>
          <div className="row blanco-base d-none d-lg-block">&nbsp;</div>
        </div>
        <div className="col-lg-8">
          <div className="row bordes align-items-center justify-content-center">
            {option == 1 && (
              <div className="col-xl-3 col-lg-4 mb-3">
                <a href="pagar-mi-cuenta">
                  <div className="d-flex align-self-center text-left opcion">
                    <div className="mt-2">
                      <img
                        style={{ margin: "10px" }}
                        width="45px"
                        height="45px"
                        alt="pagar-mi-cuenta2"
                        src="/iconos/pagar-mi-cuenta2.svg"
                      />
                      <span>Pagar mi cuenta</span>
                    </div>
                  </div>
                </a>
              </div>
            )}
            {option < 3 && (
              <div className="col-xl-3 col-lg-4  mb-3">
                <a href="/tarifas">
                  <div className="d-flex align-self-center text-left opcion">
                    <div className="mt-2">
                      <img
                        style={{ margin: "10px" }}
                        width="45px"
                        height="45px"
                        alt="lupa"
                        src="/iconos/lupa.svg"
                      />
                      <span>Revisar tarifas</span>
                    </div>
                  </div>
                </a>
              </div>
            )}
            {option < 4 && (
              <div className="col-xl-3 col-lg-4  mb-3">
                <a href="https://wtx.metrogas.cl/cuentasonline/www/aspx/login/login.aspx">
                  <div className="d-flex align-self-center text-left opcion">
                    <div className="mt-2">
                      <img
                        style={{ margin: "10px" }}
                        width="45px"
                        height="45px"
                        alt="cuenta-online"
                        src="/iconos/cuenta-online.svg"
                      />
                      <span>Entrar a mi cuenta online</span>
                    </div>
                  </div>
                </a>
              </div>
            )}
            {option < 5 && option > 1 && (
              <div className="col-xl-3 col-lg-4  mb-3">
                <a onClick={myToggleFunction}>
                  <div className="d-flex align-self-center text-left opcion">
                    <div className="mt-2">
                      <img
                        style={{ margin: "10px" }}
                        width="45px"
                        height="45px"
                        alt="ejecutivo"
                        src="/iconos/ejecutivo.svg"
                      />
                      <span>Hablar con un ejecutivo</span>
                    </div>
                  </div>
                </a>
              </div>
            )}
            {option < 6 && option > 2 && (
              <div className="col-xl-3 col-lg-4  mb-3">
                <a
                  href="https://www.centrodeayudametrogas.cl/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="d-flex align-self-center text-left opcion">
                    <div className="mt-2">
                      <img
                        style={{ margin: "10px" }}
                        width="45px"
                        height="45px"
                        alt="ayudar"
                        src="/iconos/ayudar.svg"
                      />
                      <span>En qué te ayudamos</span>
                    </div>
                  </div>
                </a>
              </div>
            )}
            {option < 7 && option > 3 && (
              <div className="col-xl-3 col-lg-4  mb-3">
                <a
                  href="https://www.clubmetrogas.cl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="d-flex align-self-center text-left opcion">
                    <div className="mt-2">
                      <img
                        width="150px"
                        height="90px"
                        alt="clubmetrogas"
                        src="/iconos/clubmetrogas.svg"
                      />
                      <span>Club METROGAS</span>
                    </div>
                  </div>
                </a>
              </div>
            )}
            {option < 8 && option > 4 && (
              <div className="col-xl-3 col-lg-4  mb-3">
                <a href="pagar-mi-cuenta">
                  <div className="d-flex align-self-center text-left opcion">
                    <div className="mt-2">
                      <img
                        style={{ margin: "10px" }}
                        width="45px"
                        height="45px"
                        alt="pagar-mi-cuenta2"
                        src="/iconos/pagar-mi-cuenta2.svg"
                      />
                      <span>Pagar mi cuenta</span>
                    </div>
                  </div>
                </a>
              </div>
            )}
            {option < 9 && option > 5 && (
              <div className="col-xl-3 col-lg-4  mb-3">
                <a href="/tarifas">
                  <div className="d-flex align-self-center text-left opcion">
                    <div className="mt-2">
                      <img
                        style={{ margin: "10px" }}
                        width="45px"
                        height="45px"
                        alt="lupa"
                        src="/iconos/lupa.svg"
                      />
                      <span>Revisar tarifas</span>
                    </div>
                  </div>
                </a>
              </div>
            )}
            <div className="col-lg-9 d-flex justify-content-between align-items-center mt-2">
              <a
                className="ml-2  icono"
                onClick={() => {
                  if (option == 1) {
                    setOption(6);
                  }
                  if (option > 1) {
                    setOption(option - 1);
                  }
                }}
              >
                <img src="/iconos/arrow-left.svg" alt="arrow-left" />
              </a>
              <ol className="carousel-indicators">
                <li
                  className={`${option == 1 ? "active" : ""}`}
                  onClick={() => setOption(1)}
                ></li>
                <li
                  className={`${option == 2 ? "active" : ""}`}
                  onClick={() => setOption(2)}
                ></li>
                <li
                  className={`${option == 3 ? "active" : ""}`}
                  onClick={() => setOption(3)}
                ></li>
                <li
                  className={`${option == 4 ? "active" : ""}`}
                  onClick={() => setOption(4)}
                ></li>
                <li
                  className={`${option == 5 ? "active" : ""}`}
                  onClick={() => setOption(5)}
                ></li>
                <li
                  className={`${option == 6 ? "active" : ""}`}
                  onClick={() => setOption(6)}
                ></li>
              </ol>
              <a
                className="mr-2  icono"
                onClick={() => {
                  if (option == 6) {
                    setOption(1);
                  }
                  if (option < 6) {
                    setOption(option + 1);
                  }
                }}
              >
                <img src="/iconos/arrow-right.svg" alt="arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeseasHacer;
