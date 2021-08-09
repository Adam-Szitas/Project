import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { select, Store } from '@ngrx/store';

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


  realUserName!: string;
  realPassword!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{cena: User}>
  ) {
    store.pipe(select('cena')).subscribe(
      (values:any) => {
        this.realUserName = values[0].default.user.displayName;
        this.realPassword = values[0].default.user.password;
      }
    )
  }

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
      this.registerForm.controls['confirm'].value === this.registerForm.controls['passWord'].value
    )

    if(!userNameCheck && passWordCheck){
        this.which = 'password';
        this.logoSource = '../../../assets/icons/Password@1x.png';
        this.textSource = 'Great, now your password please.';
        this.showBack.emit(true);
        return;
    }else if(!userNameCheck && !passWordCheck && confirmCheck){ //successful validation


      //checking the values and comparing them
      if(
        this.registerForm.controls['userName'].value == this.realUserName &&
        this.registerForm.controls['passWord'].value == this.realPassword
      ){
        localStorage.setItem('userName',this.realUserName);
        let data = this.registerForm.getRawValue();
        this.router.navigate(['/loggedin']);
      }else{
        alert('You made some mistakes so rather user the real username and password');
      }


    }else{
      this.showBack.emit(false);
      this.textSource = 'Start by setting up your username.';
      this.logoSource = '../../../assets/icons/User@1x.png';
      this.registerForm.controls['passWord'].setValue('');
      this.registerForm.controls['confirm'].setValue('');
      this.which = 'username';
    }
  }

}
