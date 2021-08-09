import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  continue: boolean = false;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.continue = true;

  }

  goToAuth(){
    this.router.navigate(['authentication']);
  }

}
