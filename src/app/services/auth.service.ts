import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Guarda a URL que o usuário tentou acessar antes de ser redirecionado para o login
  redirectUrl: string | null = null;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/register', user);
  }

  login(credentials: { email: string, senha: string }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', credentials);
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
