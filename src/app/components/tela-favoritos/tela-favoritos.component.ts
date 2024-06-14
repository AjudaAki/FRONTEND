import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tela-favoritos',
  templateUrl: './tela-favoritos.component.html',
  styleUrls: ['./tela-favoritos.component.css']
})
export class TelaFavoritosComponent {
  public $cards?:Observable<any[]>

  constructor(private api: ApiService, private router: Router){}

  ngAfterViewInit(): void {
    this.$cards = this.getCards()
    console.log(this.$cards)
  }

  getCards(): Observable<any> {
    return this.api.profsFav()
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

