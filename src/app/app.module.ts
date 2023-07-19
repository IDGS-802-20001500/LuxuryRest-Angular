import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { VentasComponent } from './modulos/ventas/ventas/ventas.component';
import { ComprasComponent } from './modulos/compras/compras/compras.component';
import { InventarioComponent } from './modulos/inventario/inventario/inventario.component';
import { ProductosComponent } from './modulos/productos/productos/productos.component';
import { ProveedoresComponent } from './modulos/proveedores/proveedores/proveedores.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios/usuarios.component';
import { PedidosComponent } from './modulos/pedidos/pedidos/pedidos.component';
import { FinanzasComponent } from './modulos/finanzas/finanzas/finanzas.component';
import { AgregarComponent } from './modulos/inventario/agregar/agregar.component';
import { LoginComponent } from './modulos/login/login/login.component';
import { RegistrarseComponent } from './modulos/login/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    VentasComponent,
    ComprasComponent,
    InventarioComponent,
    ProductosComponent,
    ProveedoresComponent,
    UsuariosComponent,
    PedidosComponent,
    FinanzasComponent,
    AgregarComponent,
    LoginComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
