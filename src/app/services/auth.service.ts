import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetTokenService } from './getToken.service';
import { Observable } from 'rxjs';
import { loginForm, perfilUsuario } from '../interfaces/request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Guarda a URL que o usuário tentou acessar antes de ser redirecionado para o login
  redirectUrl: string | null = null;

  constructor(private http: HttpClient,  private token: GetTokenService) {}

  register(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3333/users/aluno', user);
  }

  login(credentials: loginForm): Observable<any> {
    return this.http.post<any>('http://localhost:3333/login', credentials);
  }


  logout(): void {
    // Limpa o token de autenticação armazenado no localStorage
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
  }
}
