import { Component } from '@angular/core';
import { FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(public formBuilder: FormBuilder){}
  registerForm = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],   
  
    confirmPassword: ['', Validators.required]   
  
  });
  onSubmit(){
    console.log(this.registerForm.value);
  }

}
