import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tela-favoritos',
  templateUrl: './tela-favoritos.component.html',
  styleUrls: ['./tela-favoritos.component.css']
})
export class TelaFavoritosComponent {
  public $cards?:Observable<any[]>

  constructor(){}

  ngAfterViewInit(): void {
    this.$cards = this.getCards()
  }

  getCards(): Observable<any> {
    return of([
      {
        name: 'Felipe Rosse Cavalcante1',
        description:
          'siasiubauibsuyaibsyuavusvauvsuyayuvsuyavsvauvsavusvaugvsgvaugsvauvsug',
      },
      {
        name: 'Felipe Rosse Cavalcante2',
        description:
          'siasiubauibsuyaibsyuavusvauvsuyayuvsuyavsvauvsavusvaugvsgvaugsvauvsug',
      },
      {
        name: 'Felipe Rosse Cavalcante3',
        description:
          'siasiubauibsuyaibsyuavusvauvsuyayuvsuyavsvauvsavusvaugvsgvaugsvauvsug',
      },
      {
        name: 'Felipe Rosse Cavalcante4',
        description:
          'siasiubauibsuyaibsyuavusvauvsuyayuvsuyavsvauvsavusvaugvsgvaugsvauvsug',
      },
      {
        name: 'Felipe Rosse Cavalcante5',
        description:
          'siasiubauibsuyaibsyuavusvauvsuyayuvsuyavsvauvsavusvaugvsgvaugsvauvsug',
      }
    ]);
  }
}

