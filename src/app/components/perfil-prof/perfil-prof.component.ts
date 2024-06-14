import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { comentario, perfilProfAcessado } from 'src/app/interfaces/request.interface';

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
  id: number;
  infoProf: any;
  card: any;
  formComent: any;
  idLogado = localStorage.getItem('userId');
  public $coments?: Observable<any[]>;

  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder) {
    this.id = Number(localStorage.getItem('idCard'));
  }


  ngOnInit(): void {
    this.formComent = this.fb.group({
      comentario: ['', Validators.required],
    });

    this.acessarCard(Number(this.id));
    this.infoProf;
    this.$coments = this.getComents(Number(this.id));
    console.log("aqui "+this.$coments);
  }

  botaoVoltar() {
    localStorage.removeItem('idCard');
    this.router.navigate(['/professores']);
  }

  getComents(id: number): Observable<any[]> {
    return this.apiService.comentariosProf(id);
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

  sendComment(id: number) {
    const idLogadoNum = Number(this.idLogado); // Converter idLogado para número
    const comentarioData: comentario = {
      id_usuario: idLogadoNum,
      comentario_usuario: this.formComent.get('comentario').value,
    };

    this.apiService.fazerComentarioProf(id, comentarioData).subscribe({
      next: () => {
        // Lidar com sucesso
        this.$coments = this.getComents(id); // Atualiza os comentários após enviar um novo comentário
        this.formComent.reset(); // Limpa o formulário de comentário
      },
      error: (error) => {
        // Lidar com erro
        console.error('Erro ao enviar comentário:', error);
      },
    });

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

  acessarCard(id: number) {
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
