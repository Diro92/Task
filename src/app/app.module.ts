import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InformationService } from 'src/service/information.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { NavegationComponent } from './Navigation/navegation/navegation.component';
import { ActividadesComponent } from './Actividades/actividades/actividades.component';
import { ModalDetailsComponent } from './ModalDetails/modal-details/modal-details.component';
import { ProcesosComponent } from './Procesos/procesos/procesos.component';
import { RendimientoComponent } from './Rendimiento/rendimiento/rendimiento.component';
import { HomeComponent } from './Home/home/home.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    ActividadesComponent,
    ModalDetailsComponent,
    ProcesosComponent,
    RendimientoComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot(),
    AngularFireDatabaseModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    AngularFireStorageModule,
    HttpClientModule
    
    
  ],
  exports:[

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule

  ],
  providers: [InformationService],
  bootstrap: [AppComponent],
  entryComponents:[ModalDetailsComponent]
})
export class AppModule { }

