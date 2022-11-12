const Beneficios = () => {
    return (
      <>
       <div className="row align-items-center productos-servicios3">
          <div className="col-lg-4 d-flex productos-servicios3-left justify-content-between flex-column">
            <div>&nbsp;</div>
            <span>
              <b>¿Conoces los beneficios de la calefacción a gas natural?</b>
            </span>
            <div>&nbsp;</div>
          </div>
          <div className="col-lg-4 mb-4 mt-5 texto-1">
            <ul>
              <li>Metrobolsas</li>
              <li>Sistemas de Calefección</li>
            </ul>
            <div className="ml-4 mt-5 mb-3">
              <a
                href="https://sistemasdecalefaccionmetrogas.cl/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="btn">
                  Descubre más aquí
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-4 mt-5 texto-2 mb-3">
            <img
              src="/imagenes/productos-seccion-5.png"
              alt="productos-seccion-5"
            />
          </div>
        </div> 
      </>
    );
  };
  
  export default Beneficios;