import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-prof',
  templateUrl: './card-prof.component.html',
  styleUrls: ['./card-prof.component.css']
})
export class CardProfComponent {
  @Input() public professor: any;
}
