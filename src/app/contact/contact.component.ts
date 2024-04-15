import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  formContacto: FormGroup;
  tipoDni? : string = "DNI"


  constructor(private fb: FormBuilder) {
    this.formContacto = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  ngOnInit(): void {
    this.formContacto.get("tipoDni")?.valueChanges.subscribe(value =>{
      this.tipoDni=value
    })
  }
  ngOnDestroy(): void {
    
  }

  enviar() {
    console.log(this.formContacto);
  }
  hasErrors(controlName: string, errorTpye: string) {
    return (
      this.formContacto.get(controlName)?.hasError(errorTpye) &&
      this.formContacto.get(controlName)?.touched
    );
  }
}
