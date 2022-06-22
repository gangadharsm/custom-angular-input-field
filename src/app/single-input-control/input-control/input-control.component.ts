import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { InputDetails } from 'src/app/model/input-details';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
})
export class InputControlComponent implements OnInit {
  @Input()
  set control(control: AbstractControl) {
    this._control = control as FormControl;
  }

  get control(): FormControl {
    return this._control;
  }

  @Input() formDetails: InputDetails = {
    key: '',
    label: '',
    type: '',
    required: true,
  };

  public _control = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

  get _ControlError() {
    if (this._control.errors?.hasOwnProperty('required')) {
      return 'Enter the First Name';
    } else {
      return null;
    }
  }
}
