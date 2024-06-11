import { perfilUsuario, registerDataAluno, registerDataProf } from './interfaces/request.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetTokenService } from './services/getToken.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private token: GetTokenService) { }

  cadastroUser(data: registerDataAluno): Observable<any>{

      const url = 'http://localhost:3333/users/aluno'
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
      })

      return this.http.post(url, data, {headers})
  }

  cadastroProf(data: registerDataProf): Observable<any>{
    const url = 'http://localhost:3333/users/professor/all'
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

    perfil(): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      });
      return this.http.get<any>('http://localhost:3333/users/aluno/log', { headers });
    }

    tags(): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      })
      return this.http.get<any>('http://localhost:3333/tags', { headers });
    }
}
