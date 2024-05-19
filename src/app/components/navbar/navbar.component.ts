import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  botaoProf = 1
  botaoFav = 2
  botaoPerfil = 3
    // botaoProf(){
    //   const profButton = document.querySelector('.botao-prof') as HTMLElement;
    //     if (profButton) {
    //       profButton.style.backgroundColor = 'white';
    //     }
    // }

}
