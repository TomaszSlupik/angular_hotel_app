import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  reservationForm: FormGroup

  constructor(private fb: FormBuilder) {

    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],  
      checkOutDate: ['', Validators.required]
    });
  }

  onSubmit() {

  }

}
