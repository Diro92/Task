import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPersistenceService {

  Objeto:any;
  constructor() { }


  Information(data:Object){

    this.Objeto = data;
   

  }


}
