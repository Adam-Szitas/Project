import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  continue: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.continue = true;

  }

  toggleAuth(event:string){
    if(event == 'continue'){
      this.continue = true;
    }
  }

}
