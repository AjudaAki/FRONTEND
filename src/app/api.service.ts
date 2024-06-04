import { registerDataAluno } from './interfaces/request.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  cadastroUser(data: registerDataAluno): Observable<any>{

      const url = 'http://localhost:3333/users/aluno'
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
      })

      return this.http.post(url, data, {headers})
  }

  loginUser(data: any): Observable<any>{
      const url = 'http://localhost:3333/login'
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
      })
      return this.http.post( url, data, {headers})
    }

}
