import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from './products.service';
import { UserAddComponent } from './user-add/user-add.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SucAddComponent } from './suc-add/suc-add.component';
import { SucGetComponent } from './suc-get/suc-get.component';
import { SucEditComponent } from './suc-edit/suc-edit.component';
import { EntityAddComponent } from './entity-add/entity-add.component';
import { EntityGetComponent } from './entity-get/entity-get.component';
import { EntityEditComponent } from './entity-edit/entity-edit.component';
import { CajaAddComponent } from './caja-add/caja-add.component';
import { CajaGetComponent } from './caja-get/caja-get.component';
import { CajaEditComponent } from './caja-edit/caja-edit.component';
import { VentaAddComponent } from './venta-add/venta-add.component';
import { VentaGetComponent } from './venta-get/venta-get.component';
import { VentaEditComponent } from './venta-edit/venta-edit.component';
import { UserService } from './user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    UserAddComponent,
    UserGetComponent,
    UserEditComponent,
    SucAddComponent,
    SucGetComponent,
    SucEditComponent,
    EntityAddComponent,
    EntityGetComponent,
    EntityEditComponent,
    CajaAddComponent,
    CajaGetComponent,
    CajaEditComponent,
    VentaAddComponent,
    VentaGetComponent,
    VentaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
