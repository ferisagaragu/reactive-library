import Swal from 'sweetalert2';

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
  });
}

export const alertLoading = (text: string): void => {
  Swal.fire({
    html: 
      '<div class="col-md-12 text-center">' +
        `<h3 class="mb-4">${text}</h3>` + 
        '<div class="slider row">' +
          '<div class="line"></div>' + 
          '<div class="break dot1"></div>' + 
          '<div class="break dot2"></div>' +
          '<div class="break dot3"></div>' +
        '</div>' +
      '</div>',
    showConfirmButton: false,
    showCancelButton: false,
    allowOutsideClick: false
  });
}

export const closeAlertLoading = (): void => {
  Swal.close();
}

export const alertInput = (
  iconType: "success" | "error" | "warning" | "info" | "question", 
  title: string, 
  text: string,
  input: 'text' | 'email' | 'url' | 'password' | 'textarea' | 
  'select' | 'radio' | 'checkbox' | 'file' | 'range',
  inputPlaceholder: string,
  inputValue?: string,
  validateMessage?: string,
  onSuccess?: Function
): void => {
  Swal.fire({
    type: iconType,
    title,
    text,
    input,
    inputPlaceholder,
    inputValue: inputValue ? inputValue : '',
    showCancelButton: true,
    inputValidator: (value: any): any => {
      if (validateMessage) {
        if (!value) {
          return validateMessage;
        }
      }
    }
  }).then((data: any) => onSuccess && onSuccess(data.value));  
}