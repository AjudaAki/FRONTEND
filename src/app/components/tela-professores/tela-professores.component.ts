import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tela-professores',
  templateUrl: './tela-professores.component.html',
  styleUrls: ['./tela-professores.component.css'],
})
export class TelaProfessoresComponent implements OnInit {
  public $cards?: Observable<any[]>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.$cards = this.getCards();
  }

  getCards(): Observable<any[]> {
    return this.api.profs();
  }
}
