import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup

  ngOnInit(): void {}

  constructor(private fb: FormBuilder) {

    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],  
      checkOutDate: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      room: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('Formularz poprawny', this.reservationForm.value);
    } else {
      this.markAllAsTouched();
    }
  }

  private markAllAsTouched() {
    Object.keys(this.reservationForm.controls).forEach(field => {
      const control = this.reservationForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

}
