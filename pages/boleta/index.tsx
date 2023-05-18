import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useCloseModal } from "react";

const Pagina: NextPage = () => {
  const [paso, setPaso] = useState(0);
  const [index, setIndex] = useState(0);
  const [modal1, setModal1] = useState(false);
  const [condicion_texto, setCondicion_texto] = useState(0);
  const Boton = () => {
    return (<button className="close bg-info text-white rounded p-2" arial-label="Close"
      onClick={() => setModal1(false)}  >
      <span>&times;</span>
    </button>)
  }


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
                {/*Se crea clase"backcolorH1" para añadir color verde al h1 de pag1*/}
                <h1 className="backcolorH1" >  Conoce tu boleta acá</h1>
                {/*Se agrega espacio con br y ademas se ajusta con mt la posicion de h2 de pag1*/}
                <br />
                <h2 className="mt-7">¡Tu cuenta más clara que nunca!</h2>
              </div>
            )}
            {paso != 0 && (
              <div>
                {/*Se crea clase"backcolorH1" para añadir color verde al h1 y se cambia la frase de pag2*/}
                <h1 className="backcolorH1" >  Conoce tu boleta acá</h1>
                {/*Se agrega espacio con br y ademas se ajusta con mt la posicion de h2 de pag2*/}
                <br />
                <h2>Siempre prefiere tu Boleta Electrónica</h2>
                <br />
                <br />
                {/* Se cra una nueva clase que le dara formato al nuevo boton en seccion boleta boton: CAMBIATE AQUÍ */}
                <a className="btn_cambiate" href="https://www.centrodeayudametrogas.cl/suscripcion-boleta-electronica?_ga=2.145932084.1275340568.1682695120-1198051725.1649727019" target="_blank">Cambiate aquí</a>
              </div>
            )}
            {/* <div className="blanco-base d-none d-lg-block">&nbsp;</div> */}
          </div>
          <div
            className={"col-lg-6 home1-right " + (paso == 0 ? "" : "home2_corto")}
            style={{
              backgroundImage:
                paso == 0 ? "url(/imagenes/boleta/header.png)" : "",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {paso != 0 && (
              <img
                className="icono_hoja"
                src="/imagenes/boleta/hoja.png"
                alt="hoja"
                style={{
                  objectFit: "contain",
                  height: "60%",
                  marginTop: "4rem",
                }}
              />
              /* Se agrega una imagen con diferentes formatos para asignar nubes en el fondo*/
            )}
            {paso != 0 && (
              <img
                className="nube_1"
                src="/imagenes/boleta/nube1.png"
                alt="nube1"
                style={{
                  objectFit: "contain",
                  height: "18%",
                }}
              />
            )}
            {paso != 0 && (
              <img
                className="nube_2"
                src="/imagenes/boleta/nube1.png"
                alt="nube2"
                style={{
                  objectFit: "contain",
                  height: "23%",
                }}
              />
            )}
            {paso != 0 && (
              <img
                className="nube_3"
                src="/imagenes/boleta/nube1.png"
                alt="nube3"
                style={{
                  objectFit: "contain",
                  height: "23%",
                }}
              />
            )}
            {paso != 0 && (
              <img
                className="nube_4"
                src="/imagenes/boleta/nube1.png"
                alt="nube4"
                style={{
                  objectFit: "contain",
                  height: "23%",
                }}
              />
            )}

          </div>
        </div>
        {paso == 0 && (
          <div className="row align-items-start pagina">
            <div className="col-lg-5 d-flex justify-content-between flex-column">
              <div>&nbsp;</div>
              <span className="text-general pr-5 hoja1_cuerpo1" >
                Porque estamos comprometidos con entregarte el mejor servicio,
                te presentamos los aspectos más importantes de tu boleta de gas
                natural.
              </span>

              <button
                type="button"
                className="btn btn-primary btn-redondeado mt-5"
                onClick={() => setPaso(1)}
              >
                Conoce más aquí
              </button>

            </div>
            <div className="col-lg-7 ">
              <iframe className="video_boleta"
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
              <span className="text-general pr-5 hoja1_cuerpo2">
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
          <> {/* ***************************************   P A N E L ************************************************ */}
            <div className="row align-items-start pagina">
              <div className="col-lg-5 d-flex justify-content-between flex-column">
                <div>&nbsp;</div>
                <h4 className="boleta">Conócela</h4>
                <span className="texto_hoja2 pr-5">
                  Porque queremos que nuestros clientes estén informados,te
                  presentamos los aspectos más importantes de tu boleta de gas
                  natural.
                </span>
                {/* ******************************* C A R R U S E L    F O R M A T O   M O V I L  ************************************ */}
                <div className="carousel-inner_movil" style={{ height: '590px' }}>
                  <div className="slide">
                    <br />
                    <br />
                    <div
                      className={`mb-5 pb-5 carousel-item ${index == 0 ? "active" : ""
                        }`}
                    >	{/* Se agrega textos con sus respectivos cuadros en cadaun a de las hojas de la imagen de la boleta */}
                      <div className="row">
                        <a className="btn_1" rel="vision1" onClick={() => { setModal1(true); setCondicion_texto(1) }}> <u>1</u></a>
                        <a className="btn_2" rel="vision2" onClick={() => { setModal1(true); setCondicion_texto(2) }}> <u>2</u></a>
                        <a className="btn_3" rel="vision3" onClick={() => { setModal1(true); setCondicion_texto(3) }}> <u>3</u></a>
                        {modal1 &&
                          <div id="modal1" className="col-lg-5 ModalOverlay" >
                            <br />
                            <br />
                            <br />
                            <br />
                            {condicion_texto == 1 &&
                              <div className="card-block mb-5">
                                <div className="card-header">Número de cliente  <button className="close bg-info text-white rounded p-2" arial-label="Close"
                                  onClick={() => setModal1(false)}  >
                                  <span>&times;</span>
                                </button>                 </div>
                                <div className="card-body">
                                  Es tu identificador y con él puedes acceder a los
                                  datos de tu suministro desde el sitio web o
                                  llamando al centro de ayuda. Te recomendamos
                                  tenerlo siempre a mano.
                                </div>
                              </div>
                            }
                            {condicion_texto == 2 &&
                              <div className="card-block mb-5">
                                <div className="card-header">Total a pagar <Boton></Boton></div>
                                <div className="card-body">
                                  En este espacio se indica el monto adeudado,
                                  detallando también el período al que corresponde
                                  el consumo y si tienes saldo anterior pendiente de
                                  pago.
                                </div>
                              </div>
                            }
                            {condicion_texto == 3 &&
                              <div className="card-block mb-5">
                                <div className="card-header">Vencimiento <Boton></Boton></div>
                                <div className="card-body">
                                  Es el plazo límite para el pago de la cuenta, y no
                                  pagar antes de esa fecha dará lugar a cobro de
                                  intereses o bien a la suspensión del servicio.
                                </div>
                              </div>
                            }
                          </div>
                        }
                        <div className="col-lg-7">
                          <div className="bullet-point d-none">
                            <div></div>
                          </div>
                          <img
                            src="/imagenes/boleta/boleta1.png"
                            alt="boleta"
                            className="d-block w-100 boleta-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mb-5 pb-5 carousel-item ${index == 1 ? "active" : ""
                        }`}
                    >	 {/* Se agrega textos con sus respectivos cuadros en cada un a de las hojas de la imagen de la boleta */}
                      <div className="row">
                        {modal1 &&
                          <div id="modal1" className="col-lg-5 ModalOverlay" >
                            {condicion_texto == 4 &&
                              <div className="card-block mb-5">
                                <div className="card-header">Detalle de mi cuenta <Boton></Boton></div>
                                <div className="card-body">
                                  En este espacio se detallan
                                  todos los cargos que se
                                  aplican en la boleta,
                                  apareciendo el consumo de
                                  gas,cuotas de artefactos o tu
                                  consumo mensual de
                                  Metrobolsa.
                                  <br />
                                  <br />
                                  Recuerda que Metrogas no realiza cobros por arriendo de
                                  medidor, por lo que siempre aparecerá en cero.
                                  <br />
                                  <br />
                                  Si eres socio del Club Metrogas, ¡aquí puedes conocer
                                  tus Metropuntos acumulados!
                                </div>
                              </div>
                            }
                            {condicion_texto == 5 &&
                              <div className="card-block mb-5">
                                <div className="card-header">Conceptos importantes
                                  <br /> de tu boleta <Boton></Boton></div>
                                <div className="card-body">
                                  Queremos que siempre estés informado de tu boleta.
                                </div>
                              </div>
                            }
                          </div>
                        }
                        <div className="col-lg-7">
                          <a className="btn_4" rel="vision4" onClick={() => { setModal1(true); setCondicion_texto(4) }}> <u>4</u></a>
                          <a className="btn_5" rel="vision1" onClick={() => { setModal1(true); setCondicion_texto(5) }}> <u>5</u></a>
                          <br />
                          <br />
                          <div className="bullet-point d-none">
                            <div></div>
                          </div>
                          <img
                            src="/imagenes/boleta/boleta2.png"
                            alt="boleta"
                            className="d-block w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <ol className="carousel-indicators pb-4 mb-4" style={{ position: 'absolute', top: '830px' }}>
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
                      <div className="carousel-indicators" style={{ position: 'absolute', top: '880px', height: '40px' }}>
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
                    <div
                      className={`mb-5 pb-5 carousel-item ${index == 2 ? "active" : ""
                        }`}
                    >				 {/* Se agrega textos con sus respectivos cuadros en cada un a de las hojas de la imagen de la boleta */}
                      <div className="row">
                        <a className="btn_6" rel="vision1" onClick={() => { setModal1(true); setCondicion_texto(6) }}> <u>6</u></a>
                        <a className="btn_7" rel="vision1" onClick={() => { setModal1(true); setCondicion_texto(7) }}> <u>7</u></a>
                        <br />
                        <br />
                        {modal1 &&
                          <div id="modal1" className="col-lg-5 ModalOverlay" >
                            {condicion_texto == 6 &&
                              <div className="col-lg-5">
                                <div className="card-block mb-5">
                                  <div className="card-header">Mi consumo en el mes actual <Boton></Boton></div>
                                  <div className="card-body">
                                    Se detalla cómo se calculó tu consumo
                                    del período indicado, el que
                                    corresponde a la diferencia entre la
                                    lectura anterior (de la facturación
                                    anterior) y la actual.
                                    <br />
                                    <br />
                                    A este resultado, que sería
                                    tu consumo del periodo
                                    facturado en la última
                                    boleta, se le aplica el
                                    denominado factor de
                                    estandarización, valor
                                    umérico que se aplica al
                                    consumo en metros cúbicos
                                    registrados por el medidor,
                                    determinados por la
                                    diferencia entre la lectura
                                    actual y anterior, para
                                    conocer cuál fue el real
                                    consumo de gas. De esta
                                    forma, en el cálculo se
                                    toman en cuenta factores
                                    como la temperatura, la
                                    presión y el poder calorífico
                                    del gas.
                                  </div>
                                </div>
                              </div>
                            }
                            {condicion_texto == 7 &&
                              <div className="card-block mb-5">
                                <div className="card-header">¿Cuál fue mi consumo de los últimos 13 meses? <Boton></Boton></div>
                                <div className="card-body">
                                  Es el plazo límite para el pago de la cuenta, y no
                                  pagar antes de esa fecha dará lugar a cobro de
                                  intereses o bien a la suspensión del servicio.
                                </div>
                              </div>
                            }

                          </div>
                        }
                        <div className="col-lg-7">
                          <div className="bullet-point d-none">
                            <div></div>
                          </div>
                          <img
                            src="/imagenes/boleta/boleta3.png"
                            alt="boleta"
                            className="d-block w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mb-5 pb-5 carousel-item ${index == 2 ? "active" : ""
                        }`}
                    >
                    </div>

                  </div>
                </div>
                {/* *****************************  F I N     C A R R U S E L   M O V I L   ****************************************** */}
                <div className="row align-items-start pagina"></div>
                <div className="mt-5">&nbsp;</div>
                <h4 className="boleta_sub2">¿Dudas con tu cuenta?</h4>
                <span className="texto_hoja2_parte2 pr-5">
                  Te recomendamos siempre revisar la boleta anterior y tu
                  historial de consumo, a los que puedes tener acceso fácilmente
                  desde Mi Cuenta Online.
                  <br />
                  <br />
                  {/* SE AGREGA FRASE NO INCLUIDA CON SU ESPACIO CORRESPONDIENTE */}
                  Si aún no te registras, hazlo aquí:
                  <br />
                  <br />
                </span>
                <br />
                <br />
                <br />
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
                      className={`mb-5 pb-5 carousel-item ${index == 0 ? "active" : ""
                        }`}
                    >	 {/* Se agrega textos con sus respectivos cuadros en cada un a de las hojas de la imagen de la boleta */}
                      <div className="row">
                        <div className="col-lg-5">
                          <br />
                          <br />
                          <br />
                          <br />
                          <div className="card-block mb-5">
                            <div className="card-header">Número de cliente</div>
                            <div className="card-body">
                              Es tu identificador y con él puedes acceder a los
                              datos de tu suministro desde el sitio web o
                              llamando al centro de ayuda. Te recomendamos
                              tenerlo siempre a mano.
                            </div>
                          </div>
                          <br />
                          <br />
                          <br />
                          <div className="card-block mb-5">
                            <div className="card-header">Total a pagar</div>
                            <div className="card-body">
                              En este espacio se indica el monto adeudado,
                              detallando también el período al que corresponde
                              el consumo y si tienes saldo anterior pendiente de
                              pago.
                            </div>
                          </div>
                          <br />
                          <br />
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
                            className="d-block w-100 boleta-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mb-5 pb-5 carousel-item ${index == 1 ? "active" : ""
                        }`}
                    > {/* Se agrega textos con sus respectivos cuadros en cada un a de las hojas de la imagen de la boleta */}
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="card-block mb-5">
                            <div className="card-header">Detalle de mi cuenta</div>
                            <div className="card-body">
                              En este espacio se detallan
                              todos los cargos que se
                              aplican en la boleta,
                              apareciendo el consumo de
                              gas,cuotas de artefactos o tu
                              consumo mensual de
                              Metrobolsa.
                              <br />
                              <br />
                              Recuerda que Metrogas no realiza cobros por arriendo de
                              medidor, por lo que siempre aparecerá en cero.
                              <br />
                              <br />
                              Si eres socio del Club Metrogas, ¡aquí puedes conocer
                              tus Metropuntos acumulados!
                            </div>
                          </div>

                          <div className="card-block mb-5">
                            <div className="card-header">Conceptos importantes de tu boleta</div>
                            <div className="card-body">
                              Queremos que siempre estés informado de tu boleta.
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="bullet-point d-none">
                            <div></div>
                          </div>
                          <img
                            src="/imagenes/boleta/boleta2.png"
                            alt="boleta"
                            className="d-block w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mb-5 pb-5 carousel-item ${index == 2 ? "active" : ""
                        }`}
                    >				 {/* Se agrega textos con sus respectivos cuadros en cada un a de las hojas de la imagen de la boleta */}
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="card-block mb-5">
                            <div className="card-header">Mi consumo en el mes actual</div>
                            <div className="card-body">
                              Se detalla cómo se calculó tu consumo
                              del período indicado, el que
                              corresponde a la diferencia entre la
                              lectura anterior (de la facturación
                              anterior) y la actual.
                              <br />
                              <br />
                              A este resultado, que sería
                              tu consumo del periodo
                              facturado en la última
                              boleta, se le aplica el
                              denominado factor de
                              estandarización, valor
                              umérico que se aplica al
                              consumo en metros cúbicos
                              registrados por el medidor,
                              determinados por la
                              diferencia entre la lectura
                              actual y anterior, para
                              conocer cuál fue el real
                              consumo de gas. De esta
                              forma, en el cálculo se
                              toman en cuenta factores
                              como la temperatura, la
                              presión y el poder calorífico
                              del gas.
                            </div>
                          </div>

                          <div className="card-block mb-5">
                            <div className="card-header">¿Cuál fue mi consumo de los últimos 13 meses?</div>
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
                            src="/imagenes/boleta/boleta3.png"
                            alt="boleta"
                            className="d-block w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mb-5 pb-5 carousel-item ${index == 2 ? "active" : ""
                        }`}
                    >
                    </div>
                    <ol className="carousel-indicators pb-4 mb-4" style={{ position: 'absolute', bottom: '0' }}>
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
                    <div className="carousel-indicators" style={{ position: 'absolute', bottom: '0' }}>
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
