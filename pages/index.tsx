import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Beneficios from "@metrogas/home/beneficios";
import Servicios from "@metrogas/home/servicios";
import DeseasHacer from "@metrogas/home/deseashacer";
import AccesosDirectos from "@metrogas/home/accesosdirectos";
import router from "next/router";
import AccesosDirectosMovil from "@metrogas/home/accesosdirectosmovil";
import Callejero from "@metrogas/home/Callejero";
declare global {
  interface Window {
    videsk: any;
  }
}
const Home: NextPage = () => {
  const [imagen, setImagen] = useState(1);
  const [foto, setFoto] = useState("");
  const [url, setUrl] = useState("");

  const [data, setData] = useState([] as any[]);
  useEffect(() => {
    setData([
      {
        id: 1,
        imagen: "/imagenes/vitrina-home/home_2.jpg",
        url: "https://www.centrodeayudametrogas.cl/home",
      },
      {
        id: 2,
        imagen: "/imagenes/vitrina-home/home_1.jpg",
        url: "https://sistemasdecalefaccionmetrogas.cl/",
      },
      {
        id: 3,
        imagen: "/imagenes/vitrina-home/home_3.jpg",
        url: "https://www.centrodeayudametrogas.cl/asistente-virtual",
      },
      {
        id: 4,
        imagen: "/imagenes/vitrina-home/home_4.jpg",
        url: "https://www.centrodeayudametrogas.cl/suscripcion-boleta-electronica",
      },
      {
        id: 5,
        imagen: "/imagenes/vitrina-home/home_5.jpg",
        url: "https://www.clubmetrogas.cl",
      },
    ]);
  }, []);



  useEffect(() => {
    if (data.length == 0) return;
    setFoto(data[imagen - 1].imagen);
    setUrl(data[imagen - 1].url);
  }, [imagen, data]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imagen == data.length) {
        setImagen(1);
      }
      if (imagen < data.length) {
        setImagen(imagen + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagen]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Página principal portal Metrogas S.A."
        />
        <meta name="keywords" content="Metrogas, Gas Natural, Metrobolsas" />
        <meta
          property="og:title"
          content="Página principal portal Metrogas S.A."
        />
        <meta
          property="og:description"
          content="Portal Metrogas S.A. 2022, servicios de gas natural para hogar, comercio e industrias"
        />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <div className="container-fluid content">
        <div
          className="row align-items-center home1 d-none d-lg-flex home-banner"
          style={{
            backgroundImage: `url(${foto})`,
            backgroundSize: "cover",
          }} >
          <div className="col-lg-5 col-xl-4 d-flex justify-content-between home1-left flex-column">
            <Callejero />
            <div className="row blanco-base d-none d-lg-block">&nbsp;</div>
          </div>
          <div className="col-lg-5 home1-right d-none d-lg-block">
            <a href={url} target="_blank" rel="noreferrer">
              <div
                style={{
                  height: "300px",
                  width: "500px",
                  display: "block",
                  cursor: "pointer",
                  position: "absolute",
                  bottom: "50px"
                }}
              ></div>
            </a>
            <ol className="carousel-indicators">
              {data?.map((m: any, i: number) => (
                <li
                  key={i}
                  className={`${imagen == i + 1 ? "active" : ""}`}
                  onClick={() => setImagen(i + 1)}
                ></li>
              ))}
            </ol>
          </div>
        </div>
        <div
          className="d-block d-lg-none">
          <a href={url} target="_blank" rel="noreferrer">
            <div
              className="row align-items-center home1 home-banner"
              style={{
                backgroundImage: `url(${foto})`,
                backgroundSize: "cover",
                cursor: "pointer",
              }}
            ></div>
          </a>
          <div className="row align-items-center home1 home-banner">
            <div className="col-lg-4 d-flex justify-content-between home1-left flex-column">
              <Callejero />
            </div>
          </div>
        </div>
        <AccesosDirectos />
        <AccesosDirectosMovil />
        <DeseasHacer />
        <Servicios />
        <Beneficios />
      </div>
    </>
  );
};

export default Home;
