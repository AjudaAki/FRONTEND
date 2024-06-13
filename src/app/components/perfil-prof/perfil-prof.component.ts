import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { perfilProfAcessado } from 'src/app/interfaces/request.interface';

@Component({
  selector: 'app-perfil-prof',
  templateUrl: './perfil-prof.component.html',
  styleUrls: ['./perfil-prof.component.css'],
})
export class PerfilProfComponent implements OnInit {
  img_estrela: string = '/assets/images/estrela_sem_like.png';
  img_aviao: string = '/assets/images/svg-images/Aviao-unpress.svg';
  loading = false;
  professor: any;
  isMovedRight: boolean = false;
  isFadingIn: boolean = false;
  isFavorite: boolean = false;
  id = localStorage.getItem('idCard');
  infoProf: any;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.acessarCard(Number(this.id));
    this.infoProf
  }

  botaoVoltar() {
    localStorage.removeItem('idCard');
    this.router.navigate(['/professores']);
  }

  updateFavorite() {
    this.loading = true;
    const newState = !this.isFavorite;
    const req = newState
      ? this.apiService.favoriteProf(this.professor.id)
      : this.apiService.unfavoriteProf(this.professor.id);
    req.subscribe({
      next: () => {
        this.isFavorite = newState;
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
      this.img_aviao = '/assets/images/svg-images/Aviao-pressed.svg';
      this.isMovedRight = true;
      this.isFadingIn = true;
      setTimeout(() => {
        this.isMovedRight = false;
        setTimeout(() => {
          this.isFadingIn = false;
          this.img_aviao = '/assets/images/svg-images/Aviao-unpress.svg';
        }, 800);
      }, 1000);
    } else {
      this.img_aviao = '/assets/images/svg-images/Aviao-unpress.svg';
    }
  }

  acessarCard(id: number){
    this.apiService.cardProfAcessado(id).subscribe(
      (response: any) => {
        this.infoProf = response;
        console.log(this.infoProf);
      },
      (error: any) => {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    );
    
  }
}
