/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react";
const AccesosDirectosMovil = () => {
  const [directo, setDirecto] = useState(1);
  return (
    <>
      <div className="row align-items-center home2 d-block d-lg-none">
        <div className="col-lg-4 d-flex justify-content-between home2-left flex-column">
          <div>&nbsp;</div>
          <span>
            <b style={{ fontSize: "2rem" }}>Accesos directos</b>
          </span>
          <div className="row azul-base d-none d-lg-block">&nbsp;</div>
        </div>
        <div className="col-lg-8">
          <div className="row align-items-center bordes">
            <div className="col-xl-4 col-lg-6">
              <div className="d-flex align-items-center opcion">
                <div className="col-9">
                  <span>Llámanos antes de excavar</span>
                </div>
                <div className="col-2">
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
            <div className="col-xl-4 col-lg-6">
              <div className="d-flex align-items-center opcion">
                <div className="col-9">
                  <span>Artefactos</span>
                </div>
                <div className="col-2">
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
            <div className="col-xl-4 col-lg-6">
              <div className="d-flex align-items-center opcion">
                <div className="col-9">
                  <span>Elige tu requerimiento Centro de Ayuda Online</span>
                </div>
                <div className="col-2">
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
            <div className="col-xl-4 col-lg-6">
              <div className="d-flex align-items-center opcion">
                <div className="col-9">
                  <span>Emergencias</span>
                </div>
                <div className="col-2">
                  <a href="/emergencias">
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
            <div className="col-xl-4 col-lg-6">
              <div className="d-flex align-items-center opcion">
                <div className="col-9">
                  <span>Quiero ser cliente</span>
                </div>
                <div className="col-2">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AccesosDirectosMovil;
