import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  back:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showBack(event: any){
    this.back = event;
  }

}
