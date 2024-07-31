import { AbstractControl } from '@angular/forms';

export const hasError = (
  control: AbstractControl,
  errorName: string
): boolean => {
  return control.hasError(errorName) && (control.dirty || control.touched);
};