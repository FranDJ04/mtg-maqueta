import { useState } from "react";
import { InputGeneral } from "@fullconectados/forms/input-general";
import type { NextPage } from "next";
import Head from "next/head";import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { successMessage } from "@fullconectados/utils/dialog";
import { SearchBox } from "@fullconectados/forms/SearchBox";
import { comunaService } from "services/comuna.service";
import { contactosService } from "services/contactos.service";
import { InputArea } from "@fullconectados/forms/input-area";

const Pagina: NextPage = () => {
  const [comunaId, setComunaId] = useState(0);
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("Nombre es requerido"),
    direccion: Yup.string().required("Dirección es requerido"),
    telefono: Yup.string().required("Teléfono es requerido"),
    correo: Yup.string().email("Formato de email no valido").required("Email es requerido"),
    comuna: Yup.string().required("Comuna es requerido"),
    motivo: Yup.string().required("Motivo es requerido"),
  });

  const [pago, setPago] = useState(1);
  const formOptions = { resolver: yupResolver(validationSchema) };
  const form = useForm(formOptions);
  const { register, handleSubmit, formState, setValue, trigger } = form;
  const { errors } = formState;

  function handleComuna(e: any) {
    if (e != null) {
      setComunaId(e.id);
      setValue("comuna", e.nombre);
      trigger("comuna");
    } else {
      setComunaId(0);
      setValue("comuna", "");
    }
  }

  function limpiar() {
    setValue("nombre", "");
    setValue("direccion", "");
    setValue("telefono", "");
    setValue("correo", "");
    setValue("comuna", "");
    setValue("motivo", "");
  }

  function onSubmit(data: any) {
    var send = {
      id: 0,
      nombre: data.nombre,
      telefono: data.telefono,
      correo: data.correo,
      atributos: encodeURIComponent(JSON.stringify({
        direccion: data.direccion,
        comercio: data.comercio,
        comuna: data.comuna,
        motivo: data.motivo
      })),
      plantilla_id: 1,
      estado: false,
    };
    contactosService.save(send)
      .then((res: any) => {
        if (res) {
          successMessage("mensaje", () => limpiar());
        }
      });
  }

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
          className="row align-items-center artefactos"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="col-lg-8 d-flex justify-content-between artefactos-left flex-column">
            <div className="col-lg-9 artefactos-center d-flex align-items-end mb-4 titulo">
            </div>
            <div className="row blanco-base d-none d-lg-block">&nbsp;</div>
          </div>
          <div></div>
        </div>
        <div className="d-flex align-items-center pagina">
          <div className="d-flex flex-wrap justify-content-center col-lg-12 align-self-start mt-3 mb-5">
            <div className="container-formulario">
              <div className="header-form">
                <div className="col-md-12">
                  <h1 className="title-form">
                    ¿Necesitas cotizar algún artefacto?
                  </h1>
                </div>
                <div className="col-md-12">
                  <h3 className="subtitle-form">
                    Ingresa tus datos y te contactaremos.
                  </h3>
                </div>
              </div>
              <div className="formulario">
                <form
                  className="col-lg-12 align-items-center mt-5"
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="col-lg-12 d-flex flex-wrap">
                      <div className="col-12 col-lg-6 form-group">
                        <InputGeneral
                          type="text"
                          name="nombre"
                          register={register}
                          errors={errors}
                          placeholder="Juan González"
                        >Nombre*</InputGeneral>
                      </div>
                      <div className="col-12 col-lg-6 form-group">
                        <InputGeneral
                          type="text"
                          name="correo"
                          register={register}
                          errors={errors}
                          placeholder="mail@mail.cl"
                        >Email*</InputGeneral>
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex flex-wrap">
                      <div className="col-12 col-lg-6 form-group">
                        <InputGeneral
                          type="text"
                          name="direccion"
                          register={register}
                          errors={errors}
                          placeholder="Calle, número, casa / depto / block"
                        >Dirección*</InputGeneral>
                      </div>
                      <div className="col-12 col-lg-6 form-group">
                        <label className="form-label" style={{ color: "white" }}>Comuna*</label>
                        <SearchBox
                          name="comuna"
                          placeholder="Buscar comuna"
                          error={errors.comuna}
                          dataHost={comunaService.find}
                          onValue={handleComuna}
                        >

                        </SearchBox>
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex flex-wrap">
                      <div className=" col-12 col-lg-6 form-group">
                        <InputGeneral
                          type="number"
                          name="telefono"
                          register={register}
                          errors={errors}
                          placeholder="2225421658"
                        >Teléfono*</InputGeneral>
                      </div>

                      <div className="col-12 col-lg-6 form-group">
                        <InputArea
                          name="motivo"
                          form={form}
                          placeholder="Mi motivo es..."
                        >Motivo contacto*</InputArea>
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex flex-wrap">
                      <div className="d-none d-lg-block col-lg-3 form-group">
                      </div>

                      <div className="col-12 col-lg-6 form-group">
                        <label className="form-label" style={{ color: "white" }}>&nbsp;</label>
                        <button
                          type="submit"
                          className="btn btn-primary btn-custom"
                          disabled={formState.isSubmitting}
                        >
                          Quiero que me contacten
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagina;
