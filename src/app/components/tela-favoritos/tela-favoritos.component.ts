import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-favoritos',
  templateUrl: './tela-favoritos.component.html',
  styleUrls: ['./tela-favoritos.component.css']
})
export class TelaFavoritosComponent {
  img_estrela: string = '/assets/images/estrela _com_like.png'; 


  trocarImagem() {
    if (this.img_estrela === '/assets/images/estrela _com_like.png') {
      this.img_estrela = '/assets/images/estrela_sem_like.png'; 
    } else {
      this.img_estrela = '/assets/images/estrela _com_like.png';
    }
  }
  

}
