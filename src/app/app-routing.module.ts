import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import { SucAddComponent } from './suc-add/suc-add.component';
import { SucEditComponent } from './suc-edit/suc-edit.component';
import { SucGetComponent } from './suc-get/suc-get.component';
import { EntityAddComponent } from './entity-add/entity-add.component';
import { EntityEditComponent } from './entity-edit/entity-edit.component';
import { EntityGetComponent } from './entity-get/entity-get.component';
import { CajaAddComponent } from './caja-add/caja-add.component';
import { CajaEditComponent } from './caja-edit/caja-edit.component';
import { CajaGetComponent } from './caja-get/caja-get.component';
import { VentaAddComponent } from './venta-add/venta-add.component';
import { VentaEditComponent } from './venta-edit/venta-edit.component';
import { VentaGetComponent } from './venta-get/venta-get.component';
const routes: Routes = [
  {
    path: 'product/create',
    component: ProductAddComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'products',
    component: ProductGetComponent
  },
  {
    path: 'user/create',
    component: UserAddComponent
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent
  },
  {
    path: 'users',
    component: UserGetComponent
  },
  {
    path: 'suc/create',
    component: SucAddComponent
  },
  {
    path: 'suc/edit/:id',
    component: SucEditComponent
  },
  {
    path: 'sucs',
    component: SucGetComponent
  },
  {
    path: 'ent/create',
    component: EntityAddComponent
  },
  {
    path: 'ent/edit/:id',
    component: EntityEditComponent
  },
  {
    path: 'ents',
    component: EntityGetComponent
  },
  {
    path: 'caja/create',
    component: CajaAddComponent
  },
  {
    path: 'caja/edit/:id',
    component: CajaEditComponent
  },
  {
    path: 'cajas',
    component: CajaGetComponent
  },
  {
    path: 'venta/create',
    component: VentaAddComponent
  },
  {
    path: 'venta/edit/:id',
    component: VentaEditComponent
  },
  {
    path: 'ventas',
    component: VentaGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
