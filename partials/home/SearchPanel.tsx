import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import { ModalWindow } from '@fullconectados/Modal';
import Swal from 'sweetalert2'
import { TextBox } from '@fullconectados/forms/TextBox';
import { SearchBox } from '@fullconectados/forms/SearchBox';
import { comunaService } from 'services/comuna.service';
interface SearchPanelType {
  action: string;
  procesarCliente?: any;
}
const SearchPanel = ({ action, procesarCliente }: SearchPanelType) => {
  const validationSchema1 = Yup.object().shape({
    comuna: Yup.string()
      .required('Comuna es requerido'),
    calle: Yup.string()
      .required('Calle es requerido'),
    numero: Yup.string()
      .required('Numero es requerido'),
    depto: Yup.string()
      .nullable()
      .notRequired(),
    ic: Yup.number()
      .nullable()
      .notRequired()
  });
  const validationSchema2 = Yup.object().shape({
    ic: Yup.number()
      .typeError('N° cliente es numerico')
      .required('N° cliente es requerido'),
  });
  const router = useRouter();
  const [comunaId, setComunaId] = useState(0);
  const [calleId, setCalleId] = useState(0);
  const [numeroId, setNumeroId] = useState('0@');
  const [modo, setModo] = useState(1);
  const formOptions = { resolver: yupResolver((modo == 1 ? validationSchema1 : validationSchema2)) };
  const { register, handleSubmit, formState, setValue, getValues, trigger } = useForm(formOptions);
  const { errors } = formState;
  const [showModal, setShowModal] = useState(false);
  const [table, setTable] = useState<any[]>([]);

  function onSubmit(data: any) {
    procesarCliente(12345678)
  }

  function handleComuna(e: any) {
    if (e != null) {
      setComunaId(e.id);
      setValue('comuna', e.nombre)
      trigger('comuna')
      setValue('calle', '')
    } else {
      setComunaId(0);
      setValue('comuna', '')
      setValue('calle', '')
    }
  }
  function handleCalle(e: any) {
    if (e != null) {
      setCalleId(e.id);
      setValue('calle', e.nombre)
      trigger('calle')
      setValue('numero', '')
    } else {
      setCalleId(0);
      setValue('calle', '')
      setValue('numero', '')
    }
  }

  function handleNumero(e: any) {
    if (e != null) {
      setNumeroId(calleId + '@' + e.nombre)
      setValue('numero', e.nombre)
      trigger('numero')
      setValue('depto', '')
    } else {
      setNumeroId('0@')
      setValue('numero', '')
      setValue('depto', '')
    }
  }
  function handleAdicional(e: any) {
    if (e != null) {
      setValue('depto', e.nombre)
      trigger('depto')
    } else {
      setValue('depto', '')
    }
  }

  return (
    <form autoComplete="off" className="row mx-2" onSubmit={handleSubmit(onSubmit)}>
      {(modo == 1) && <div className="col-lg-12 form-group">
        <div className="col-lg-12 form-group">
          <SearchBox
            name="comuna"
            placeholder="Comuna"
            error={errors.comuna}
            dataHost={comunaService.find}
            onValue={handleComuna}>
            Comuna:</SearchBox>
        </div>
        <TextBox
          name="calle"
          placeholder="Calle"
          error={errors.calle}
          register={register}>
          Calle:</TextBox>
        <TextBox
          name="numero"
          placeholder="N°"
          error={errors.numero}
          register={register}>
          Número:</TextBox>
        <TextBox
          name="depto"
          placeholder="Casa, Depto, Block"
          error={errors.depto}
          register={register}>
          Casa o Departamento:</TextBox>
      </div>}
      {(modo == 2) && <>
        <TextBox mask="numero" name="ic" placeholder="Número de cliente" maxLength={10} error={errors.ic} register={register}>Número de Cliente:</TextBox>
        <div className="col-lg-12 form-group text-center">
          <img src='/cuenta.png' alt='número cliente' />
        </div>
      </>}

      <div className="col-lg-12 form-group text-center">
        {(modo == 1) && <a onClick={() => setModo(2)}>Paga con tu N° Cliente</a>}
        {(modo == 2) && <a onClick={() => setModo(1)}>Paga con tu Dirección</a>}
      </div>
      <div className="col-lg-12 form-group text-center">
        <button type="submit"
          disabled={formState.isSubmitting}
          className={`btn btn-primary`}
          style={{ 'padding': '0.375rem 2rem' }}
        >
          {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
          {action}
        </button>
      </div>

      <ModalWindow title="Alternativas de dirección"
        onClose={() => setShowModal(false)}
        show={showModal}
        width='768px'
        height='540px'
        fullSize={false}
      >
        <>
          {table.length > 0 &&
            <div>
              <p><b>Dirección</b>: {table[0]?.calle?.nombre} {table[0]?.numero}, {table[0]?.calle?.comuna?.nombre}</p>
            </div>
          }
          <table className="table">
            <thead>
              <tr>
                <th>N° Cliente</th>
                <th>Complemento</th>
                <th>Block</th>
                <th>Adicional</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {table.map((item: any, i: number) => {
                return (
                  <tr key={i}>
                    <td>{item.ic}</td>
                    <td>{item.complemento}</td>
                    <td>{item.block}</td>
                    <td>{item.adicional}</td>
                    <td>
                      <button type="button" className={`btn btn-success`} onClick={() => procesarCliente(item.ic)}>
                        {action}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </>
      </ModalWindow>
    </form>
  )
}

export default SearchPanel