import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{

  registerForm:FormGroup = new FormGroup({});

  constructor(private authService:AuthService) { }

  ngOnInit():void{
    this.registerForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: this.authService.uniqueEmailValidator(),
        updateOn: 'blur'
      }),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('',[Validators.required, Validators.minLength(3)]),
      aboutMe: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(3)])
    },{
      validators:passwordMatchValidator
    })

    /**const formControlPhone = this.registerForm.get('phone') as FormControl;
    formControlPhone.valueChanges.subscribe((res) => {
      console.log('Howdy MOM', res);
    })**/

    this.registerForm.valueChanges.subscribe((res) => {
      console.log('Howdy MOM', res);
    })
  }

  testLoaded():void{
    const mockData = {
      email: 'test@example.com',
      name: 'Test',
      lastName: 'Test',
      phone: '123456789',
      aboutMe: 'Test',
      password: '12345678',
      passwordConfirm: '12345678'
    }

    this.registerForm.setValue(mockData);
  }

  testUploaded():void{
    const mockData = {

      phone: '55615615',

    }

    this.registerForm.patchValue(mockData);
  }
}

function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any{
  const valuePassword = formCurrent.get('password')?.value;
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
  return (valuePassword === valuePasswordConfirm) ? null : {'mismatch':true}
}
