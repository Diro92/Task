import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators,FormsModule  } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { InformationService } from 'src/service/information.service';
import {Objeto} from 'src/model/objeto.model';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDetailsComponent } from 'src/app/ModalDetails/modal-details/modal-details.component';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  TaskList: Objeto[];
  TareasGuardadas=[];
   animal: string="Ramon";
  displayedColumns = ['Nombre','Tipo','Duracion','Actions'];
  dataSource = new MatTableDataSource<Objeto>();
  constructor(db: AngularFireDatabase,
    private Information: InformationService,
    private toastr: ToastrService,
    private dialog:MatDialog
    ){


  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.Information.getData().snapshotChanges().subscribe(

      list=>{
        this.TaskList = list.map(item =>{
          return {
            $key:item.key,
            ...item.payload.val()
          }
        })
        this.dataSource.data = this.TaskList;
      }
    )
  }

    form = new FormGroup({
    $key:new FormControl(null),
    Nombre: new FormControl('',Validators.required),
    Tipo: new FormControl('',Validators.required),
    Duracion: new FormControl('',Validators.required),
  })


  Edit(Objeto){

    this.form.setValue(Objeto);
  }
  onSumbit(){

    if(this.form.get('$key').value==null){
      this.Information.add(this.form.value);
      this.form.reset();

    }else{
       
      this.Information.update(this.form.value);
      this.form.reset();  

    }
      
  }
  onDelete(key:string){

    if(confirm('Are you sure you want to delette this')){
      
      this.Information.delete(key);
      this.form.reset(); 
    }
    this.table.renderRows();
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 

 //Pop up

    open(Objeto:Objeto){
   
     
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = "80%";
      dialogConfig.height = "80%";
      dialogConfig.data = Objeto;
      this.dialog.open(ModalDetailsComponent,dialogConfig)
     
    }

 //


  get Nombre (){

    return this.form.get('Nombre');
  }
  get Duracion (){

    return this.form.get('Duracion');
  }
  get Tipo (){

    return this.form.get('Tipo');
  }



}
