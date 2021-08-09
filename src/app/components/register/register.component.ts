import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() showBack = new EventEmitter();

  which: string = 'username';

  logoSource: string = '../../../assets/icons/User@1x.png';
  textSource: string = 'Start by setting up your username.';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  registerForm = new FormGroup({
    userName: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z \-\']+')
    ]
    ),
    passWord: new FormControl(
      '',
      [Validators.minLength(9),
      Validators.required]
    ),
    confirm: new FormControl(
      '',
      [Validators.required]
    )
  });

  ngOnInit(): void {
  }


  submitUser(){
    let userNameCheck = (this.registerForm.controls['userName'].invalid &&
      (this.registerForm.controls['userName'].dirty ||
      this.registerForm.controls['userName'].touched)) ||
      this.registerForm.controls['userName'].value == '';
    let passWordCheck = (this.registerForm.controls['passWord'].invalid &&
      (this.registerForm.controls['passWord'].dirty ||
      this.registerForm.controls['passWord'].touched)) ||
      this.registerForm.controls['passWord'].value == '';
    let confirmCheck = (
      this.registerForm.controls['confirm'] === this.registerForm.controls['passWord']
    )
    if(!userNameCheck && passWordCheck){
        this.which = 'password';
        this.logoSource = '../../../assets/icons/Password@1x.png';
        this.textSource = 'Great, now your password please.';
        this.showBack.emit(true);
        return;
    }else if(!userNameCheck && !passWordCheck && confirmCheck){
      let data = this.registerForm.getRawValue();
        this.router.navigate(['/loggedin',data]);
    }else{
      this.which = 'username';
    }
  }

}
