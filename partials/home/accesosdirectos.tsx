/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react";
const AccesosDirectos = () => {
  const [directo, setDirecto] = useState(1);
  return (
    <>
      <div className="row align-items-center home2 d-none d-sm-flex">
        <div className="col-lg-4 d-flex justify-content-between home2-left flex-column">
          <div>&nbsp;</div>
          <span>
            <b>Accesos directos</b>
          </span>
          <div className="row azul-base d-none d-lg-block">&nbsp;</div>
        </div>
        <div className="col-lg-8">
          <div className="row align-items-center bordes">
            {directo == 1 && (
              <div className="col-xl-4 col-lg-6">
                <div className="d-flex align-items-center opcion">
                  <div className="col-lg-9">
                    <span>Llámanos antes de excavar</span>
                  </div>
                  <div className="col-lg-2">
                    <a
                      href="/#"
                      target='_blank rel="noreferrer'
                    >
                      <button className="ml-auto">
                        <img
                          src="/iconos/right-vector.svg"
                          alt="right-vector"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {directo < 3 && (
              <div className="col-xl-4 col-lg-6">
                <div className="d-flex align-items-center opcion">
                  <div className="col-lg-9">
                    <span>Artefactos</span>
                  </div>
                  <div className="col-lg-2">
                    <a href="/artefactos">
                      <button className="ml-auto">
                        <img
                          src="/iconos/right-vector.svg"
                          alt="right-vector"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {directo < 4 && (
              <div className="col-xl-4 col-lg-6">
                <div className="d-flex align-items-center opcion">
                  <div className="col-lg-9">
                    <span>Elige tu requerimiento Centro de Ayuda Online</span>
                  </div>
                  <div className="col-lg-2">
                    <a href="/#">
                      <button className="ml-auto">
                        <img
                          src="/iconos/right-vector.svg"
                          alt="right-vector"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {directo < 5 && directo > 1 && (
              <div className="col-xl-4 col-lg-6">
                <div className="d-flex align-items-center opcion">
                  <div className="col-lg-9">
                    <span>Emergencias</span>
                  </div>
                  <div className="col-lg-2">
                    <a href="/#">
                      <button className="ml-auto">
                        <img
                          src="/iconos/right-vector.svg"
                          alt="right-vector"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {directo < 6 && directo > 2 && (
              <div className="col-xl-4 col-lg-6">
                <div className="d-flex align-items-center opcion">
                  <div className="col-lg-9">
                    <span>Quiero ser cliente</span>
                  </div>
                  <div className="col-lg-2">
                    <a href="https://cambiate.metrogas.cl">
                      <button className="ml-auto">
                        <img
                          src="/iconos/right-vector.svg"
                          alt="right-vector"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {directo < 7 && directo > 3 && (
              <div className="col-xl-4 col-lg-6">
                <div className="d-flex align-items-center opcion">
                  <div className="col-lg-9">
                    <span>Llámanos antes de excavar</span>
                  </div>
                  <div className="col-lg-2">
                    <a
                      href="/#"
                      target='_blank rel="noreferrer'
                    >
                      <button className="ml-auto">
                        <img
                          src="/iconos/right-vector.svg"
                          alt="right-vector"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {directo < 8 && directo > 4 && (
              <div className="col-xl-4 col-lg-6">
                <div className="d-flex align-items-center opcion">
                  <div className="col-lg-9">
                    <span>Artefactos</span>
                  </div>
                  <div className="col-lg-2">
                    <a href="/Artefactos">
                      <button className="ml-auto">
                        <img
                          src="/iconos/right-vector.svg"
                          alt="right-vector"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
            <div className="col-lg-12 d-flex justify-content-between align-items-center">
              <a
                className="ml-2 d-none d-md-block icono"
                onClick={() => {
                  if (directo == 1) {
                    setDirecto(5);
                  }
                  if (directo > 1) {
                    setDirecto(directo - 1);
                  }
                }}
              >
                <img src="/iconos/arrow-left.svg" alt="arrow-left" />
              </a>
              <ol className="carousel-indicators">
                <li
                  className={`${directo == 1 ? "active" : ""}`}
                  onClick={() => setDirecto(1)}
                ></li>
                <li
                  className={`${directo == 2 ? "active" : ""}`}
                  onClick={() => setDirecto(2)}
                ></li>
                <li
                  className={`${directo == 3 ? "active" : ""}`}
                  onClick={() => setDirecto(3)}
                ></li>
                <li
                  className={`${directo == 4 ? "active" : ""}`}
                  onClick={() => setDirecto(4)}
                ></li>
                <li
                  className={`${directo == 5 ? "active" : ""}`}
                  onClick={() => setDirecto(5)}
                ></li>
              </ol>
              <a
                className="mr-2 d-none d-md-block icono"
                onClick={() => {
                  if (directo == 5) {
                    setDirecto(1);
                  }
                  if (directo < 5) {
                    setDirecto(directo + 1);
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

export default AccesosDirectos;