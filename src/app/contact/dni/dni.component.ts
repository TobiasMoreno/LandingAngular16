import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnChanges {
  @Input() tipoDni?: string = 'DNI';
  formDni: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formDni = this.fb.group({
      dni: [''],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.["tipoDni"].currentValue);
    
  }
  hasErrors(controlName: string, errorTpye: string) {
    return (
      this.formDni.get(controlName)?.hasError(errorTpye) &&
      this.formDni.get(controlName)?.touched
    );
  }
}
