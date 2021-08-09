import { createReducer } from '@ngrx/store';
import * as Data from '../../../assets/data/data.json';


export const initialState: any = [Data]


//készíthetnék több initialState típusú változót, amik tartalmaznák az egyes adatokat, mint "name" vagy "username" vagy akár "password", szóval mindent
//valami módon inicializálnom kellene őket és visszaadni observableként



const _cenaReducer = createReducer(
  initialState
);

export function counterReducer(state:any, action:any) {
  switch(action.type){
    case 'update':
      return [...state, action.payload]
    default:
      return _cenaReducer(state, action);
  }
}
