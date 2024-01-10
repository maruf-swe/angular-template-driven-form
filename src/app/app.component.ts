import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template-driven-form';
  defaultCountry = 'india';
  defaultGender = 'Male';
  gender = [
    {id: '1', value: 'male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'other'}

  ]

  @ViewChild('myForm') form!: NgForm;

  onSubmit(){
    console.log(this.form);
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstname="Marufur";
    // this.form.value.personDetails.lastname="Rahman";
    // this.form.value.personDetails.email="maruf12gmail.com";
    this.form.setValue({
      country: '',
      gender: '',
      hobbies: '',
      personDetails: {
        firstname:'marufur',
        lastname:'rahman',
        email:'maruf12@gmail.com'
      }
    })

  }
}
