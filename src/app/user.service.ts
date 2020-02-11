import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  addUser(User, Password, Nombre, ApellidoPaterno, ApellidoMaterno, eMail, CarnetIdentidad, Celular, Whatsapp, FechaNacimiento) {
    console.log(User, Password, Nombre, ApellidoPaterno, ApellidoMaterno, eMail, CarnetIdentidad, Celular, Whatsapp, FechaNacimiento);
    const obj = {
        User,
        Password,
        Nombre, 
        ApellidoPaterno, 
        ApellidoMaterno, 
        eMail, 
        CarnetIdentidad, 
        Celular, 
        Whatsapp, 
        FechaNacimiento
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editUser(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateUser(User, Password,Nombre, ApellidoPaterno, ApellidoMaterno, eMail, CarnetIdentidad, Celular, Whatsapp, FechaNacimiento, id) {
    const obj = {
        User, 
        Password,
        Nombre, 
        ApellidoPaterno, 
        ApellidoMaterno, 
        eMail, 
        CarnetIdentidad, 
        Celular, 
        Whatsapp, 
        FechaNacimiento, 
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteUser(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}