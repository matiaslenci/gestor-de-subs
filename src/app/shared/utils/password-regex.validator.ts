import { FormControl } from '@angular/forms';

export function passwordValidator(
  control: FormControl
): { [key: string]: boolean } | null {
  const password = control.value;

  if (!password || password === '') {
    return null; // La validación pasará si la contraseña está vacía
  }

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

  if (!regex.test(password)) {
    return { passwordRequirements: true };
  }

  return null; // La contraseña cumple con los requisitos
}
