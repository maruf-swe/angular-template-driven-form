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
  firstname: any;
  lastname: any;
  email: any;
  gen: any;
  country: any;
  hobbies: any;


  gender = [
    {id: '1', value: 'male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'other'}

  ]

  @ViewChild('myForm') form!: NgForm;

  onSubmit(){
    console.log(this.form);
    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;
    this.hobbies = this.form.value.hobbies;
    this.form.reset();

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

    this.form.form.patchValue({
      personDetails: {
        firstname:'marufur',
        lastname:'rahman',
        email:'maruf12@gmail.com'
      }
      
    })

  }
}
