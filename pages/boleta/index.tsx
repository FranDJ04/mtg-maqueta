import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Pagina: NextPage = () => {
  const [paso, setPaso] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Conoce tu Boleta acá | Metrogas.</title>
        <meta
          name="description"
          content="
          Acá te presentamos los aspectos más importantes de tu boleta de gas natural, para que no tengas dudas al momento de tu cobro. Visítanos para más información."
        />
        <meta name="keywords" content="Metrogas, Gas Natural, Metrobolsas" />
        <meta
          property="og:title"
          content="
          Conoce tu Boleta acá | Metrogas."
        />
        <meta
          property="og:description"
          content="
          Acá te presentamos los aspectos más importantes de tu boleta de gas natural, para que no tengas dudas al momento de tu cobro. Visítanos para más información."
        />
        <meta property="og:image" content="/logo.png" />
      </Head>

      <div className="container-fluid content">
        <div className="row align-items-center pgheader">
          <div className="col-lg-6 home1-text titulo">
            {paso == 0 && (
              <div>
                <h1>Conoce tu boleta acá</h1>
                <h2>¡Tu cuenta más clara que nunca!</h2>
              </div>
            )}
            {paso != 0 && (
              <div>
                <h1>Conoce tu boleta acá</h1>
                <h2>Siempre prefiere tu Boleta Electrónica</h2>
              </div>
            )}
            {/* <div className="blanco-base d-none d-lg-block">&nbsp;</div> */}
          </div>
          <div
            className="col-lg-6 home1-right"
            style={{
              backgroundImage:
                paso == 0 ? "url(/imagenes/boleta/header.png)" : "",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {paso != 0 && (
              <img
                src="/imagenes/boleta/hoja.png"
                alt="hoja"
                style={{
                  objectFit: "contain",
                  height: "60%",
                  marginTop: "4rem",
                }}
              />
            )}
          </div>

        </div>
        {paso == 0 && (
          <div className="row align-items-start pagina">
            <div className="col-lg-5 d-flex justify-content-between flex-column">
              <div>&nbsp;</div>
              <span className="text-general pr-5">
                Porque estamos comprometidos con entregarte el mejor servicio,
                te presentamos los aspectos más importantes de tu boleta de gas
                natural.
              </span>

              <button
                type="button"
                className="btn btn-primary d-none d-md-block btn-redondeado mt-5"
                onClick={() => setPaso(1)}
              >
                Conoce más aquí
              </button>
            </div>
            <div className="col-lg-7">
              <iframe
                style={{ height: "370px", width: "100%" }}
                //style={{ width: "1203px", height: "532px" }}
                src="https://player.vimeo.com/video/677891597?autoplay=0&amp;loop=0&amp;autopause=0"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {paso == 0 && (
          <div className="row align-items-start pagina">
            <div className="col-lg-5 d-flex justify-content-between flex-column">
              <span className="text-general pr-5">
                Recuerda que puedes revisar tu estado de cuenta e historial de
                consumos registrándote en Mi Cuenta Online, donde además puedes
                obtener el duplicado de tu boleta. Si aún no te registras hazlo
                <a href="https://wtx.metrogas.cl/cuentasonline/www/aspx/registro/Registro.aspx" target="_blank" rel="noreferrer"> <u>aquí</u></a>
              </span>

            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-1">
                  <img src="/imagenes/boleta/icon-1.svg" alt="icono" />
                </div>
                <div className="col-lg-11 boleta-titulo"><h2>Información clara</h2></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-11 boleta-cuerpo">
                  Aumentamos el tamaño de la letra y de la información en
                  general para facilitar la lectura. Ahora tus datos (nombre,
                  dirección y número de cliente) y el detalle de tu consumo
                  (lectura actual y posterior, gas consumido y total de la
                  cuenta, entre otros) aparecen con letra más grande y clara.
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1">
                  <img src="/imagenes/boleta/icon-2.svg" alt="icono" />
                </div>
                <div className="col-lg-11 boleta-titulo"><h2>Boleta más simple</h2></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-11 boleta-cuerpo">
                  Ordenamos y priorizamos la información facilitando el acceso a
                  los datos de cliente y de suministro, como también a la
                  información sobre lugares de pago y contacto.
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1">
                  <img src="/imagenes/boleta/icon-3.svg" alt="icono" />
                </div>
                <div className="col-lg-11 boleta-titulo"><h2>Fácil de entender</h2></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-11 boleta-cuerpo">
                  Ordenamos y priorizamos la información facilitando el acceso a
                  los datos de cliente y de suministro, como también a la
                  información sobre lugares de pago y contacto.
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1">
                  <img src="/imagenes/boleta/icon-4.svg" alt="icono" />
                </div>
                <div className="col-lg-11 boleta-titulo"><h2>Gráficos</h2></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-11 boleta-cuerpo">
                  Agregamos información y gráficos para que se entienda mejor el
                  consumo de cada mes.
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1">
                  <img src="/imagenes/boleta/icon-5.svg" alt="icono" />
                </div>
                <div className="col-lg-11 boleta-titulo">
                <h2>Consejos de eficiencia</h2>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-11 boleta-cuerpo">
                  Incorporamos tips de eficiencia energética para que uses de
                  mejor forma la energía en tu hogar.
                </div>
              </div>
            </div>
          </div>
        )}
        {paso != 0 && (
          <>
            <div className="row align-items-start pagina">
              <div className="col-lg-5 d-flex justify-content-between flex-column">
                <div>&nbsp;</div>
                <h4 className="boleta">Conócela</h4>
                <span className="text-general pr-5">
                  Porque queremos que nuestros clientes estén informados,te
                  presentamos los aspectos más importantes de tu boleta de gas
                  natural.
                </span>
                <div className="mt-5">&nbsp;</div>
                <h4 className="boleta">¿Dudas con tu cuenta?</h4>
                <span className="text-general pr-5">
                  Te recomendamos siempre revisar la boleta anterior y tu
                  historial de consumo, a los que puedes tener acceso fácilmente
                  desde Mi Cuenta Online.
                  <br />
                  <br />
                </span>
                <div className="cuadrito col-lg-10">
                  <div className="card-block mb-5">
                    <div className="row p-3">
                      <div className="col-lg-5 d-flex justify-content-center align-self-center">
                        <img width="120px" height="120px" src="iconos/hojita-boleta.svg" alt="" />
                      </div>
                      <div className="card-body col-lg-7 pl-2">
                          Recuerda que somos metroambientalistas, deja de
                          imprimir esta boleta suscribiéndote a su envío
                          electrónico
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-2 mb-4">
                      <a href="https://www.centrodeayudametrogas.cl/suscripcion-boleta-electronica" target="_blank" rel="noreferrer">
                        <button type="button" className="btn">
                          Confirma tu suscripción aquí
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="carousel-inner">
                  <div className="slide">
                    <div
                      className={`mb-5 pb-5 carousel-item ${
                        index == 0 ? "active" : ""
                      }`}
                    >
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="card-block mb-5">
                            <div className="card-header">Número de cliente</div>
                            <div className="card-body">
                              Es tu identificador y con él puedes acceder a los
                              datos de tu suministro desde el sitio web o
                              llamando al centro de ayuda. Te recomendamos
                              tenerlo siempre a mano.
                            </div>
                          </div>
                          <div className="card-block mb-5">
                            <div className="card-header">Total a pagar</div>
                            <div className="card-body">
                              En este espacio se indica el monto adeudado,
                              detallando también el período al que corresponde
                              el consumo y si tienes saldo anterior pendiente de
                              pago.
                            </div>
                          </div>
                          <div className="card-block mb-5">
                            <div className="card-header">Vencimiento</div>
                            <div className="card-body">
                              Es el plazo límite para el pago de la cuenta, y no
                              pagar antes de esa fecha dará lugar a cobro de
                              intereses o bien a la suspensión del servicio.
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="bullet-point d-none">
                            <div></div>
                          </div>
                          <img
                            src="/imagenes/boleta/boleta1.png"
                            alt="boleta"
                            className="d-block w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mb-5 pb-5 carousel-item ${
                        index == 1 ? "active" : ""
                      }`}
                    >
                      <div className="row">
                        <div className="col-lg-5">&nbsp;</div>
                        <div className="col-lg-7">
                          <img
                            src="/imagenes/boleta/boleta2.png"
                            alt="boleta"
                            className="d-block w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mb-5 pb-5 carousel-item ${
                        index == 2 ? "active" : ""
                      }`}
                    >
                      <div className="row">
                        <div className="col-lg-5">&nbsp;</div>
                        <div className="col-lg-7">
                          <img
                            src="/imagenes/boleta/boleta3.png"
                            alt="boleta"
                            className="d-block w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <ol className="carousel-indicators pb-4 mb-4" style={{position: 'absolute', bottom: '0'}}>
                      <li
                        className={index == 0 ? "active" : ""}
                        onClick={() => {
                          setIndex(0);
                        }}
                        style={{
                          backgroundColor:
                            index == 0 ? "#23A6F0" : "rgba(35, 166, 240, 0.5)",
                        }}
                      ></li>
                      <li
                        className={index == 1 ? "active" : ""}
                        onClick={() => {
                          setIndex(1);
                        }}
                        style={{
                          backgroundColor:
                            index == 1 ? "#23A6F0" : "rgba(35, 166, 240, 0.5)",
                        }}
                      ></li>
                      <li
                        className={index == 2 ? "active" : ""}
                        onClick={() => {
                          setIndex(2);
                        }}
                        style={{
                          backgroundColor:
                            index == 2 ? "#23A6F0" : "rgba(35, 166, 240, 0.5)",
                        }}
                      ></li>
                    </ol>
                    <div className="carousel-indicators" style={{position: 'absolute', bottom: '0'}}>
                      <button
                        className="btn"
                        style={{
                          color: "#fff",
                          background:
                            index > 0 ? "#23A6F0" : "rgba(35, 166, 240, 0.5)",
                          borderRadius: "500px 0px 0px 500px",
                        }}
                        onClick={() => {
                          setIndex((index == 0 ? 3 : index) - 1);
                        }}
                      >
                        Anterior
                      </button>
                      <button
                        className="btn"
                        style={{
                          color: "#fff",
                          background:
                            index < 2 ? "#23A6F0" : "rgba(35, 166, 240, 0.5)",
                          borderRadius: "0px 500px 500px 0px",
                          borderLeft: "2px solid #FFFFFF",
                        }}
                        onClick={() =>
                          setIndex((index == 3 - 1 ? -1 : index) + 1)
                        }
                      >
                        Siguiente
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">&nbsp;</div>
          </>
        )}
      </div>
    </>
  );
};

export default Pagina;
