import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil-prof',
  templateUrl: './perfil-prof.component.html',
  styleUrls: ['./perfil-prof.component.css']
})



export class PerfilProfComponent {
  
  img_estrela: string = '/assets/images/estrela_sem_like.png'; // Caminho inicial da imagem

  constructor(private router: Router) {}


botaoVoltar(){
  this.router.navigate(['/professores'])
}


trocarImagem() {
  if (this.img_estrela === '/assets/images/estrela_sem_like.png') {
    this.img_estrela = '/assets/images/estrela _com_like.png'; // Caminho da segunda imagem
  } else {
    this.img_estrela = '/assets/images/estrela_sem_like.png'; // Volta para a primeira imagem
  }
}

}
