import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './modulos/productos/productos/productos.component';
import { LoginComponent } from './modulos/login/login/login.component';
import { RegistrarseComponent } from './modulos/login/registrarse/registrarse.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'producto',component: ProductosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/registrarse', component: RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
