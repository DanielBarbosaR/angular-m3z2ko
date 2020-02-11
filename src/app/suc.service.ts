import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucService {

  uri = 'http://localhost:4000/sucs';

  constructor(private http: HttpClient) { }

  addSuc(Nombre, Empresa, CarnetIdentidad, NombreResponsable, CelularResponsable, WhatsappResponsable) {
    console.log(Nombre, Empresa, CarnetIdentidad, NombreResponsable, CelularResponsable, WhatsappResponsable);
    const obj = {
      Nombre, 
      Empresa, 
      CarnetIdentidad, 
      NombreResponsable, 
      CelularResponsable, 
      WhatsappResponsable
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getSucs() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editSucs(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateSucs(Nombre, Empresa, CarnetIdentidad, NombreResponsable, CelularResponsable, WhatsappResponsable, id) {
    const obj = {
      Nombre, 
      Empresa, 
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

  deleteSuc(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}