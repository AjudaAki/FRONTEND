import {
  perfilUsuario,
  registerDataAluno,
  registerDataProf,
} from './interfaces/request.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, mergeMap, of } from 'rxjs';
import { GetTokenService } from './services/getToken.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private token: GetTokenService) {}

  cadastroUser(data: registerDataAluno): Observable<any> {
    const url = 'http://localhost:3333/users/aluno';
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    return this.http.post(url, data, { headers });
  }

  cadastroProf(data: registerDataProf): Observable<any> {
    const url = 'http://localhost:3333/users/professor/all';
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    return this.http.post(url, data, { headers });
  }

  loginUser(data: any): Observable<any> {
    const url = 'http://localhost:3333/login';
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
    return this.http.post(url, data, { headers });
  }

  perfil(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token.getToken()}`,
    });
    return this.http.get<any>('http://localhost:3333/users/aluno/log', {
      headers,
    });
  }

  perfilProf(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token.getToken()}`,
    });
    return this.http.get<any>('http://localhost:3333/users/professor/log', {
      headers,
    });
  }

  tags(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<any>('http://localhost:3333/tags', { headers });
  }

  unfavoriteProf(idProf: number): Observable<any> {
    return this.perfil().pipe(
      mergeMap((profile) => {
        const params = new HttpParams();
        params.set('usuario_relacionado', idProf);
        params.set('usuario_logado', profile.id);
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
        return this.http.delete<any>(
          'http://localhost:3333/favorito',
          { headers, params }
        );
      })
    );
  }
  favoriteProf(idProf: number): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(
      'http://localhost:3333/favorito',
      { usuario_relacionado: idProf },
      { headers }
    );
  }
  profs(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token.getToken()}`
    });
    return this.http.get<any>('http://localhost:3333/users/professores/card', { headers });
  }
}
