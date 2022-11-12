import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InputGeneral } from "@fullconectados/forms/input-general";
import SearchPanel from "@metrogas/home/SearchPanel";

const Callejero = () => {
  const [pago, setPago] = useState(2);
  const vsLogin = Yup.object().shape({
    rutdv: Yup.string().required("Rut cliente es requerido"),
    clave: Yup.string().required("Contraseña es requerido"),
  });
  const formLogin = useForm({ resolver: yupResolver(vsLogin) });
  const refLogin = useRef<HTMLFormElement>(null);

  const vsPassword = Yup.object().shape({
    rutdv: Yup.string().required("Rut cliente es requerido"),
  });
  const formPassword = useForm({ resolver: yupResolver(vsPassword) });
  const refPassword = useRef<HTMLFormElement>(null);

  const [of, setOf] = useState<any>(null);

  const onLoginSubmit = () => {
    const rutdv = formLogin.getValues("rutdv").replace("-", "");
    const rut = rutdv.substring(0, rutdv.length - 1);
    const dv = rutdv.substring(rutdv.length - 1);
    formLogin.setValue("rutdv", `${rut}-${dv}`);
    setOf({ mode: 1, rut, dv, clave: formLogin.getValues("clave") });
  };

  function myToggleFunction() {
    if (window.videsk) window.videsk.toggle();
  }
  const onPasswordSubmit = () => {
    const rutdv = formPassword.getValues("rutdv").replace("-", "");
    const rut = rutdv.substring(0, rutdv.length - 1);
    const dv = rutdv.substring(rutdv.length - 1);
    formPassword.setValue("rutdv", `${rut}-${dv}`);
    setOf({ mode: 2, rut, dv });
  };

  const onPagarSubmit = (ic: string) => {
    setOf({ mode: 3, ic });
  };

  useEffect(() => {
    if (of == null) return;
    switch (of.mode) {
      case 1:
        if (refLogin?.current) {
          if (typeof refLogin?.current?.requestSubmit === "function") {
            refLogin?.current?.requestSubmit();
          } else {
            refLogin?.current?.submit();
          }
        }
        break;
      case 2:
        if (refPassword?.current) {
          if (typeof refPassword?.current?.requestSubmit === "function") {
            refPassword?.current?.requestSubmit();
          } else {
            refPassword?.current?.submit();
          }
        }
        break;
      case 3:
        var url =
          "http://wss.metrogas.cl/pagoonline/Home/Publico?cuentaNumero=" +
          of?.ic;
        window.open(url, "_self");
        return;
    }
  }, [of]);
  return (
    <>
      <div
        className="row align-items-between formulario"
        style={{ border: "1px solid #23a6f0" }} >
        <div
          className="col-6 btn-1"
        >
          <button
            type="button"
            className={`btn btn-block ${(pago == 1 || pago == 3) ? "btn-primary" : "btn-secondary"
              }`}
            onClick={() => setPago(1)}
          >
            Mi Cuenta
          </button>
        </div>
        <div
          className="col-6 btn-2"
        >
          <button
            type="button"
            className={`btn btn-block ${pago == 2 ? "btn-primary" : "btn-secondary"
              }`}
            onClick={() => setPago(2)}
          >
            Pago Online
          </button>
        </div>
        {pago == 1 && (
          <>
            <form
              autoComplete="off"
              className="row mx-2"
              onSubmit={formLogin.handleSubmit(onLoginSubmit)}
            >
              <div className="col-lg-12 form-group">
                <InputGeneral
                  type="text"
                  name="rutdv"
                  register={formLogin?.register}
                  errors={formLogin?.formState?.errors}
                  placeholder="Rut"
                ></InputGeneral>
              </div>
              <div className="col-lg-12 form-group">
                <InputGeneral
                  type="password"
                  name="clave"
                  register={formLogin?.register}
                  errors={formLogin?.formState?.errors}
                  placeholder="Contraseña"
                ></InputGeneral>
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <a onClick={() => setPago(3)}>
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div
                className="col-lg-12 d-flex justify-content-center"
                style={{ padding: "0 0 40px 0" }}
              >
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: "0.375rem 2rem" }}
                  disabled={formLogin.formState.isSubmitting}
                >
                  Ingresar
                </button>
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <a href="https://wtx.metrogas.cl/cuentasonline/www/aspx/registro/Registro.aspx" target="_blank" rel="noreferrer">
                Si no estás registrado, hazlo aquí
                </a>
              </div>
            </form>
            <form
              ref={refLogin}
              action="https://wtx.metrogas.cl/cuentasonline/www/aspx/login/login.aspx"
              method="POST"
              target="_self"
            >
              <input
                type="hidden"
                id="LOGINRQ"
                name="LOGINRQ"
                value="S"
              />
              <input type="hidden" name="RUTNUMERO" value={of?.rut} />
              <input type="hidden" name="RUTDV" value={of?.dv} />
              <input
                type="hidden"
                id="CLAVE"
                name="CLAVE"
                value={of?.clave}
              />
              <input type="hidden" name="SEGMENTO" value="RES" />
            </form>
          </>
        )}
        {pago == 2 && (
          <SearchPanel
            action="Ingresar"
            procesarCliente={onPagarSubmit}
          />
        )}
        {pago == 22 && (
          <>
            <div className="col-lg-12 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Elige tu comuna"
              />
            </div>
            <div className="col-lg-12 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Calle"
              />
            </div>
            <div className="col-lg-12 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Número"
              />
            </div>
            <div className="col-lg-12 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Casa/Depto./Blk/Loc."
              />
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              <a href="#">Paga con tu número de cliente</a>
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              <button type="button" className="btn btn-primary">
                Ingresar
              </button>{" "}
            </div>
          </>
        )}
        {pago == 3 && (
          <>
            <form
              autoComplete="off"
              className="row mx-2"
              onSubmit={formPassword.handleSubmit(onPasswordSubmit)}
            >
              <div className="col-lg-12 form-group">
                <InputGeneral
                  type="text"
                  name="rutdv"
                  register={formPassword?.register}
                  errors={formPassword?.formState?.errors}
                  placeholder="Rut"
                ></InputGeneral>
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <a onClick={() => setPago(1)}>
                  Volver a acceso mi cuenta
                </a>
              </div>
              <div
                className="col-lg-12 d-flex justify-content-center"
                style={{ padding: "0 0 40px 0" }}
              >
                <button
                  type="submit"
                  style={{ padding: "0.375rem 2rem" }}
                  className="btn btn-primary"
                >
                  Recuperar
                </button>
              </div>
            </form>
            <form
              ref={refPassword}
              action="https://wtx.metrogas.cl/cuentasonline/www/aspx/login/recuperarclave.aspx"
              method="POST"
              target="_self"
            >
              <input
                type="hidden"
                id="CLAVERQ"
                name="CLAVERQ"
                value="S"
              />
              <input type="hidden" name="RUTNUMERO" value={of?.rut} />
              <input type="hidden" name="RUTDV" value={of?.dv} />
              <input type="hidden" name="SEGMENTO" value="RES" />
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Callejero;