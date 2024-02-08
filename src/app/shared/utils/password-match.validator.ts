import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator() {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  };
}
