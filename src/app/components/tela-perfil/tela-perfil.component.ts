import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'; 

@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.component.html',
  styleUrls: ['./tela-perfil.component.css']
})
export class TelaPerfilComponent implements OnInit {

  role: any; 
  userData: any;
  imgBase64: string = '';
  urlBase64: string = 'data:image/png;base64,';
  idLogado: any;
  urlBaseApi: string = 'http://localhost:3333/';
  imgPath: any;
  imgPerfil: any;
  defaultImg: string = '../../../assets/images/svg-images/padrao-perfil.svg';

  token: any = '';

  constructor(private api: ApiService, private route: Router) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    if (this.token) {
      const decodedToken: any = jwtDecode(this.token);
      this.role = decodedToken.role; 
      this.idLogado = decodedToken.id;

      if (this.role === 1) {
        this.obterDadosProf();
      } else if (this.role === 0) {
        this.obterDadosAluno();
      }
    }
  }
  
  botaoFav() {
    this.route.navigate(['/favoritos']);
  }

  obterDadosAluno(): void {
    this.api.perfil().subscribe(
      (response: any) => {
        this.userData = response;
        this.role = this.userData.modo_professor; 
        this.idLogado = this.userData.id;
        this.imgPerfil = this.userData.img_perfil || this.defaultImg;

        console.log(this.imgPerfil);
        console.log(this.userData);
        console.log(this.role);
        console.log(this.idLogado);
      },
      (error: any) => {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    );
}


  obterDadosProf(): void {
    this.api.perfilProf().subscribe(
      (response: any) => {
        this.userData = response;
        this.role = this.userData.modo_professor; 
        this.idLogado = this.userData.id;
        this.imgPerfil = this.userData.img_perfil || this.defaultImg;
        console.log(this.userData);
        console.log(this.role);
      },
      (error: any) => {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    );
  }
}
