import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Objeto } from 'src/model/Objeto.model';
//import { Objeto } from 'src/interface/objeto';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  
  Takss: AngularFireList<any>;
  Tarea:Objeto = new Objeto();
  
  constructor(private db:AngularFireDatabase) { }


  getData(){

    
    this.Takss=this.db.list('Task');
      return this.Takss;

  }

  add(Forma:Objeto){

    this.Takss.push({
        Nombre: Forma.Nombre,
        Tipo: Forma.Tipo,
        Duracion:Forma.Duracion

  }).catch(error => console.log(error));

  }
 

  delete($key:string){
     this.Takss.remove($key);
  }
  update(Forma:Objeto){

    this.Takss.update(Forma.$key,
      { Nombre: Forma.Nombre,
        Tipo: Forma.Tipo,
        Duracion:Forma.Duracion
      }
    )
  }

}
