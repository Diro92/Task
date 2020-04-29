import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/service/data-persistence.service';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {

   Objeto2=[];
   Nombre:string;
   Duracion:number;
   Tipo:string;

 
  constructor(private Persistance:DataPersistenceService) { 
    
    

  }


  ngOnInit(): void {
    
    if(this.Persistance.Objeto == null){


    }else{

    this.Nombre= this.Persistance.Objeto.Nombre;
    this.Duracion= this.Persistance.Objeto.Duracion;
    this.Tipo= this.Persistance.Objeto.Tipo;
    }
    
    
  }
 
}
