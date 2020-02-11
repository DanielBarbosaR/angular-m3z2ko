import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntService {

  uri = 'http://localhost:4000/ents';

  constructor(private http: HttpClient) { }

  addEnt(Nombre, CarnetIdentidad, NombreResponsable, CelularResponsable, WhatsappResponsable) {
    console.log(Nombre, CarnetIdentidad, NombreResponsable, CelularResponsable, WhatsappResponsable);
    const obj = {
      Nombre, 
      CarnetIdentidad, 
      NombreResponsable, 
      CelularResponsable, 
      WhatsappResponsable
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getEnts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editEnts(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateEnts(Nombre, CarnetIdentidad, NombreResponsable, CelularResponsable, WhatsappResponsable, id) {
    const obj = {
      Nombre, 
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

  deleteEnt(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}