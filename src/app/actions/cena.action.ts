import { Action } from '@ngrx/store';

export class ActionParent implements Action{
  type: any;
  payload: any;
}

export class UpdateProfile implements ActionParent{

  type = 'update';
  constructor(
    public payload: any
  ){

  }
}
