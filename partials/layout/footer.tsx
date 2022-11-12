/* eslint-disable @next/next/no-html-link-for-pages */

const Footer = () => {
    return (
        <footer>
            <img src='/logo-mobile.png' className='logo-footer d-none d-sm-block' alt='metrogas' />
            <div className="card-columns">
                <div className="block1">
                    <img src='/logo-mobile.png' className='logo-footer' alt='metrogas' />
                </div>
                <div className="block2">
                    <p>De tu interés</p>
                    <a href='https://www.clubmetrogas.cl/' rel="noreferrer" target="_blank">Club Metrogas</a>
                    <a href='/#'>Nuestra empresa</a>
                    <a href='/#'>Fonored: excava seguro</a>
                    <a href='/#'>Política de privacidad</a>
                </div>
                <div className="block3">
                    <p>Transparencia</p>
                    <a href='/#'>Normativas aplicables al gas</a>
                    <a href='/#'>Bases y promociones</a>
                    <a href='/#'>Términos y condiciones</a>
                    <a href='/#'>Modelo prevención de delitos</a>
                    <a href='https://metrogas.ines.cl/metrogas/formulario/' rel="noreferrer" target="_blank">Canal de denuncias</a>
                    <a href='/#'>Cambio de empresa distribuidora</a>
                </div>
                <div className="block4">
                    <p>Contacto</p>
                    <a href='tel:6003378000' className="d-inline">600 337 8000</a> <a className="d-inline">-</a> <a href='tel:223378000' className="d-inline">22337 8000</a>
                    <a href="https://www.centrodeayudametrogas.cl/contactenos" target="_blank" rel="noreferrer">
                                Formulario de contacto
                    </a>
                </div>

                <div className="block5">
                    <a href='https://www.facebook.com/MetrogasCL/' rel="noreferrer" target="_blank"><img src="/imagenes/facebook.svg" alt="rrss" /></a>
                    <a href='https://www.instagram.com/metrogas_cl/' rel="noreferrer" target="_blank"><img src="/imagenes/instagram.svg" alt="rrss" /></a>
                    <a href='https://twitter.com/metrogaschile' rel="noreferrer" target="_blank"><img src="/imagenes/twitter.svg" alt="rrss" /></a>
                    <a href='https://www.youtube.com/user/MetrogasChile' rel="noreferrer" target="_blank"><img src="/imagenes/youtube.svg" alt="rrss" /></a>
                </div>
                <div className="block6">
                    <p>Dónde estamos</p>
                    <span>
                        <b>Santiago <br /></b>
                        El Regidor 54, Las Condes <br />(Metro El Golf), Santiago. <br />
                        Lunes a jueves de 09:00 a 17:00 hrs.<br/>
                        Viernes de 09:00 a 15:00 hrs.
                    </span>
                    <span>
                        <b>Rancagua y Machalí<br /></b>
                        Pedro de Valdivia 100, Rancagua. <br />
                        Lunes a viernes de 09:00 a 14:00 hrs.
                    </span>
                    <span>
                        <b>Osorno<br /></b>
                        Francisco Bilbao 1176, Osorno. <br />
                        Lunes a viernes de 09:00 a 14:00 hrs.
                    </span>
                    <span>
                        <b>Puerto Montt<br /></b>
                        Benavente 867, Puerto Montt. <br />
                        Lunes a viernes de 09:00 a 14:00 hrs.
                    </span>
                </div>

                <div className="block7">
                    <img src="/sellos/sello-1.png" alt="sello 1" />
                    <img src="/sellos/sello-2.png" alt="sello 2" />
                    <img src="/sellos/sello-3.png" alt="sello 3" />
                </div>
            </div>
        </footer >)
}

export default Footer
