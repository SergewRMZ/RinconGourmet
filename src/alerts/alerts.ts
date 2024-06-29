import Swal from "sweetalert2"

export const mostrarMensaje = (tittle: string, message: string) => {
  Swal.fire({
    title: tittle,
    text: message,
    icon: 'success',
    background: 'var(--color__primario)', 
    color: '#fff',
    confirmButtonText: 'Aceptar',
    customClass: {
      confirmButton: 'swal-btn shadow'
    },

    buttonsStyling: false
  });
}

