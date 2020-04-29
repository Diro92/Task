import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadesComponent } from './Actividades/actividades/actividades.component';
import { ProcesosComponent } from './Procesos/procesos/procesos.component';
import { RendimientoComponent } from './Rendimiento/rendimiento/rendimiento.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';


const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path:'Actividades', component:ActividadesComponent},
  {path:'Procesos', component:ProcesosComponent},
  {path:'Rendimiento', component:RendimientoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
