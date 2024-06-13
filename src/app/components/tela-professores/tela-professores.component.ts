import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-professores',
  templateUrl: './tela-professores.component.html',
  styleUrls: ['./tela-professores.component.css'],
})
export class TelaProfessoresComponent implements OnInit {
  public $cards?: Observable<any[]>;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
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

