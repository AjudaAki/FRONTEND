import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-card-prof',
  templateUrl: './card-prof.component.html',
  styleUrls: ['./card-prof.component.css']
})
export class CardProfComponent {
  
  @Input() public professor:any
  public loading = false;

  constructor(private apiService:ApiService){}

}
