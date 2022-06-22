import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'input-app';

  myForm = {
    firstName: {
      key: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
      autoFocus: true,
    },
    lastName: {
      key: 'lastName',
      label: 'last Name',
      type: 'ghjghfjg',
      required: false,
    },
  };

  studentDetails: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
  });

  constructor(private fb: FormBuilder) {}
}
