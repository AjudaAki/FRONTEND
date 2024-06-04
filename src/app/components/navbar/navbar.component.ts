import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeButton: string = 'professores'; // Inicialmente define 'professores' como ativo

  setActiveButton(button: string) {
    this.activeButton = button;
  }
  isActive(button: string): boolean {
    return this.activeButton === button;
  }
}