import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  uri = 'http://localhost:4000/ventas';

  constructor(private http: HttpClient) { }

  addVenta(Producto, Cantidad, Total, Sucursal, Empresa, Fecha) {
    console.log(Producto, Cantidad, Total, Sucursal, Empresa, Fecha);
    const obj = {
      Producto, 
      Cantidad, 
      Total, 
      Sucursal, 
      Empresa, 
      Fecha
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getVentas() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editVenta(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateVenta(Producto, Cantidad, Total, Sucursal, Empresa, Fecha, id) {
    const obj = {
      Producto, 
      Cantidad, 
      Total, 
      Sucursal, 
      Empresa, 
      Fecha
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteVenta(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}