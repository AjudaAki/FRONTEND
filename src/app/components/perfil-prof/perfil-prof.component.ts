import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-perfil-prof',
  templateUrl: './perfil-prof.component.html',
  styleUrls: ['./perfil-prof.component.css'],
})
export class PerfilProfComponent implements AfterViewInit{
  img_estrela: string = '/assets/images/estrela_sem_like.png'; // Caminho inicial da imagem
  img_aviao: string = '/assets/images/svg-images/Aviao-unpress.svg';
  loading = false;
  professor: any;
  isMovedRight: boolean = false;
  isFadingIn: boolean = false;
  isFavorite: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}

  ngAfterViewInit(): void {
    //pegar prof por id
      //sub
        // pegar se é favorito
  }



  botaoVoltar() {
    this.router.navigate(['/professores']);
  }

  public updateFavorite() {
    this.loading = true;
    const newState = !this.isFavorite;
    const req = newState?this.apiService.favoriteProf(this.professor.id):this.apiService.unfavoriteProf(this.professor.id);
    req.subscribe({
      next: () => {
        this.isFavorite = newState
        this.loading = false;
      },
      error: () => {
        alert('falha ao favoritar');
        this.loading = false;
      },
    });
  }

  sendComment() {
    if (this.img_aviao === '/assets/images/svg-images/Aviao-unpress.svg') {
      // Mudar a imagem e iniciar a animação de mover para a direita
      this.img_aviao = '/assets/images/svg-images/Aviao-pressed.svg';
      this.isMovedRight = true;
      this.isFadingIn = true;
      setTimeout(() => {
        // Voltar à posição original e iniciar o efeito de fade-in
        this.isMovedRight = false;

        setTimeout(() => {
          // Remover o efeito de fade-in e voltar à imagem original
          this.isFadingIn = false;
          this.img_aviao = '/assets/images/svg-images/Aviao-unpress.svg';
        }, 800); // Tempo para a transição de fade-in (deve coincidir com a duração da transição CSS)
      }, 1000);
    } else {
      this.img_aviao = '/assets/images/svg-images/Aviao-unpress.svg';
    }
  }
}
