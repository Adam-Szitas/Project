import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdateProfile } from 'src/app/actions/cena.action';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  data: any;

  constructor(
    private route: Router,
    private store: Store<{cena: User}>
  ) {
    store.pipe(select('cena')).subscribe(
      (values: any) => {
        this.data = values[values.length - 1].default;
      }
    )
  }

  logos: any[] = [];

  fullName: string = ''
  userName: string = ''
  address: string = ''
  city: string = ''
  postalCode: string = ''
  mail: string = ''
  phone: string = ''
  socialMedia: string = ''

  updateGroup = new FormGroup({
    name: new FormControl(this.fullName, [
      Validators.required
    ]),
    username: new FormControl(this.userName,[
      Validators.required
    ]),
    address: new FormControl(this.address,[
      Validators.required
    ]),
    city: new FormControl(this.city, [
      Validators.required
    ]),
    postalCode: new FormControl(this.postalCode,[
      Validators.required
    ]),
    mail: new FormControl(this.mail,[
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl(this.phone,[
      Validators.required
    ]),
    socialMedia: new FormControl(this.socialMedia,[
      Validators.required
    ])
  })


  ngOnInit(): void {
   if(this.data.user.displayName != localStorage.getItem('userName'))
   this.route.navigate(['']);


  this.updateGroup.setValue({
    name: this.data.user.name + this.data.user.surname,
    username: this.data.user.displayName,
    address: this.data.user.contact.locations[0].address.addressString,
    city: this.data.user.contact.locations[0].address.city,
    postalCode: this.data.user.contact.locations[0].address.postalCode,
    mail: this.data.user.contact.email,
    phone: this.data.user.contact.phoneNumber,
    socialMedia: this.data.user.contact.socialNetworks[0].name
  });

  this.logos = this.data.user.contact.socialNetworks;

  }

  logout(){
    localStorage.removeItem('userName');
    this.route.navigate(['']);
  }

  updateProfile(){
    let profileData = this.updateGroup.getRawValue();
    this.store.dispatch(new UpdateProfile({user: profileData}))   //here is missing some knowledge
  }




}
