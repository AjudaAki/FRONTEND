import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}
    
    botaoPerfil(){
      this.router.navigate(['/perfil'])
    }

    botaoProfs(){
      this.router.navigate(['/professores'])
    }
  
    botaoFavs(){
      this.router.navigate(['/favoritos'])
    }

    botaoSair(){
      this.router.navigate([''])
    }
}
