import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.component.html',
  styleUrls: ['./tela-perfil.component.css']
})
export class TelaPerfilComponent implements OnInit {

  role: any; 
  userData: any;
  imgBase64: string = '';
  urlBase64: string = 'data:image/png;base64,'

  constructor(private api: ApiService, private route: Router) {}

  ngOnInit(): void {
    this.obterDadosUsuario();
  }


  botaoFav(){
    this.route.navigate(['/favoritos'])
  }


  obterDadosUsuario(): void {
    this.api.perfil().subscribe(
      (response: any) => {
        this.userData = response;
        this.role = this.userData.modo_professor; 
        this.imgBase64 = this.userData.img_perfil_base64;
        console.log(this.userData);
      },
      (error: any) => {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    );
  }
}
