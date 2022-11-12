import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link'

const Error: NextPage = (props: any) => {
  useEffect(() => {
  }, []);

  return (
    <section className="sv-error sv-error--404">
      <div className="container">
        <div className="row justify-content-end h-100">
          <div className="col-md-6 text-center my-auto">
            <div className="item">
              <h1>404</h1>
              <h3>Solicitud Incorrecta</h3>
              <h4>Su solicitud resultó en un error, el servidor no procesará la petición debido a una sintaxis de petición malformada.</h4>
              <Link href="/home" passHref={true}><a className="btn sv-button sv-button--outline">Volver al Inicio</a></Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error