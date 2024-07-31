import { AbstractControl } from "@angular/forms";

export const isInvalid = (control: AbstractControl): boolean => {
    return control.invalid && (control.dirty || control.touched)
}