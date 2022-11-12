import Swal from 'sweetalert2';

const message = {
  mensaje: {
    title: '¡Mensaje enviado con exito!',
    text: 'Un asesor comercial se contactará con usted a la brevedad.',
  },
};

export const successMessage = (item: "mensaje", callback: any) => {
  Swal.fire({
    title: message[item].title,
    text: message[item].text,
    icon: 'success',
    confirmButtonText: 'Ok',
  }).then(() => {
    callback();
  });
};

