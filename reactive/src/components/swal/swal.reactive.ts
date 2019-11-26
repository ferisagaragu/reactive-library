import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';

//const swal = withReactContent(Swal);

export const toastReactive = (
  iconType: "success" | "error" | "warning" | "info" | "question" , 
  title: string,
  position?: 'top' | 'top-start' | 'top-end' | 'top-left' | 'top-right' |
  'center' | 'center-start' | 'center-end' | 'center-left' | 'center-right' |
  'bottom' | 'bottom-start' | 'bottom-end' | 'bottom-left' | 'bottom-right'
): void => {
  
  const Toast = Swal.mixin({
    toast: true,
    position: !position ? 'bottom-end' : position,
    showConfirmButton: false,
    timer: 3000
  });

  Toast.fire({
    type: iconType,
    title: title
  });
}

export const alertReactive = (
  iconType: "success" | "error" | "warning" | "info" | "question", 
  title: string, 
  text: string
): void => {

  Swal.fire({
    type: iconType,
    title,
    text
  });
}

export const alertQuestionReactive = (
  iconType: "success" | "error" | "warning" | "info" | "question", 
  title: string, 
  text: string, 
  onSuccess: Function,
  onCancel?: Function
): void => {

  Swal.fire({
    title,
    text,
    type: iconType,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar'
  }).then((result: any) => {
    if (result.value) {
      onSuccess();
    } else {
      onCancel && onCancel();
    }
  })
}