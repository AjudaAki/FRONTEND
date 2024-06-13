import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'; 


@Component({
  selector: 'app-tela-professores',
  templateUrl: './tela-professores.component.html',
  styleUrls: ['./tela-professores.component.css'],
})
export class TelaProfessoresComponent implements OnInit {
  token = localStorage.getItem('token');
  idUsuario: any
  public $cards?: Observable<any[]>;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    if (this.token) {
      const decodedToken: any = jwtDecode(this.token);
      this.idUsuario = decodedToken.userId
      localStorage.setItem('userId', JSON.parse(JSON.stringify(this.idUsuario)))
    }
    this.$cards = this.getCards();
  }

  getCards(): Observable<any[]> {
    return this.api.profs();
  }

  acessarCard(id: number){
    this.api.cardProfAcessado(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['perfil-prof'])
      localStorage.setItem('idCard', JSON.parse(JSON.stringify(id)))
      console.log(localStorage.getItem('idCard'))
    })
    
  }
}

