import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  data: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{cena: User}>
  ) {
    store.pipe(select('cena')).subscribe(
      (values: any) => {
        console.log(values[0].default);
        this.data = values[0].default;
      }
    )
  }

  ngOnInit(): void {


  }

}
