import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ActiveButtonService } from '../../active-button.service'; // Certifique-se de usar o caminho correto

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeButton: string = 'professores'; // Inicialize com um valor padrão

  constructor(private router: Router, private activeButtonService: ActiveButtonService) {}

  ngOnInit() {
    this.activeButton = this.activeButtonService.getActiveButton();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (url.includes('professores')) {
          this.setActiveButton('professores');
        } else if (url.includes('favoritos')) {
          this.setActiveButton('favoritos');
        } else if (url.includes('perfil')) {
          this.setActiveButton('perfil');
        } else {
          this.setActiveButton('');
        }
      }
    });
  }

  setActiveButton(button: string) {
    this.activeButtonService.setActiveButton(button);
    this.activeButton = button;
  }

  isActive(button: string): boolean {
    return this.activeButtonService.getActiveButton() === button;
  }

  botaoProf() {
    this.setActiveButton('professores');
    this.router.navigate(['/professores']);
  }

  botaoFavs() {
    this.setActiveButton('favoritos');
    this.router.navigate(['/favoritos']);
  }

  botaoPerfil() {
    this.setActiveButton('perfil');
    this.router.navigate(['/perfil']);
  }

  botaoSair() {
    this.setActiveButton('');
    this.router.navigate(['']);
  }
}
