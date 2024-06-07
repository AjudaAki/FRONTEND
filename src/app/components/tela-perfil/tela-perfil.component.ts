import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpHeaders } from '@angular/common/http';
// import jwt_decode from 'jwt-decode'; // Importação da biblioteca jwt-decode

@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.component.html',
  styleUrls: ['./tela-perfil.component.css']
})
export class TelaPerfilComponent implements OnInit{
 
  role: any 
  userData: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.api.perfil().subscribe(
      (response: any) => {
        this.userData = response[0];
        console.log(this.userData);
        this.role = this.userData.modo_professor; // Atribui o valor de "modo_professor" a role
      },
      (error: any) => {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    );
  }
}
