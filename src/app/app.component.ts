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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})


export class AppComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  TaskList: Objeto[];
  displayedColumns = ['Nombre','Tipo','Duracion','Actions'];
  dataSource = new MatTableDataSource<Objeto>();
  constructor(db: AngularFireDatabase, public Information: InformationService,
    private toastr: ToastrService){


  }
  ngOnInit() {




    //##########################################
     var x = this.Information.getData();
       x.snapshotChanges().subscribe(item=>{

    this.TaskList = []; 
    item.forEach(element =>{
      var y = element.payload.toJSON()
      y["$key"] = element.key;
      this.TaskList.push(y as Objeto);
      this.dataSource.data = this.TaskList;
    
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     
        })
    })
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
      
    }
    this.table.renderRows();
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
