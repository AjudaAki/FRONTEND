import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private router: Router) {}
  activeButton: string = 'professores'; // Inicialmente define 'professores' como ativo

  setActiveButton(button: string) {
    this.activeButton = button;
  }
  isActive(button: string): boolean {
    return this.activeButton === button;
  }


  botaoProf(){
    this.router.navigate(['/professores'])
  }

  botaoFavs(){
    this.router.navigate(['/favoritos'])
  }

  botaoPerfil(){
    this.router.navigate(['/perfil'])
  }

  botaoSair(){
    this.router.navigate([''])
  }
}