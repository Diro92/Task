import { Component, OnInit, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActividadesComponent } from 'src/app/Actividades/actividades/actividades.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Objeto} from 'src/model/objeto.model';
import { DataPersistenceService } from 'src/service/data-persistence.service';
@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  @Output() Objeto:Objeto
  
  constructor(
    private Persistance:DataPersistenceService,
    public dialogRef: MatDialogRef<ActividadesComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

 ngOnInit(): void {
    


  }
  Ver(){

    this.dialogRef.close();
    this.Persistance.Information(this.data);
  }
  Cerrar(){

    this.dialogRef.close();
  }



}
