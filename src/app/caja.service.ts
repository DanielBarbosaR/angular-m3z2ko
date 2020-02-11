import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  uri = 'http://localhost:4000/cajas';

  constructor(private http: HttpClient) { }

  addCaja(Nombre, Empresa, Sucursal, CarnetIdentidad, NombreResponsable, CelularResponsable, WhatsappResponsable) {
    console.log(Nombre, Empresa, Sucursal, CarnetIdentidad, NombreResponsable, CelularResponsable, WhatsappResponsable);
    const obj = {
      Nombre, 
      Empresa, 
      Sucursal, 
      CarnetIdentidad, 
      NombreResponsable, 
      CelularResponsable, 
      WhatsappResponsable
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getCajas() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editCajas(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateCajas(Nombre, Empresa, Sucursal, CarnetIdentidad, NombreResponsable, CelularResponsable, WhatsappResponsable, id) {
    const obj = {
      Nombre, 
      Empresa, 
      Sucursal, 
      CarnetIdentidad, 
      NombreResponsable, 
      CelularResponsable, 
      WhatsappResponsable
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteCaja(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}