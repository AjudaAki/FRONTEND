import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css'],
})
export class CadastroUserComponent {
  currentStep = 1;
  currentCard: string | null = null;

  savedTimes: { [key: string]: { start: string, end: string } } = {};
  
  constructor(private router: Router) {}

  routerLogin() {
    this.router.navigate(['/login']);
  }

  nextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  openCard(card: string) {
    this.currentCard = card;
  }

  closeCard() {
    this.currentCard = null;
  }

  getCardTitle(card: string): string {
    const titles: { [key: string]: string } = {
      monday: 'Segunda',
      tuesday: 'Terça',
      wednesday: 'Quarta',
      thursday: 'Quinta',
      friday: 'Sexta',
      saturday: 'Sábado',
      sunday: 'Domingo'
    };
    return titles[card] || '';
  }
  saveTime(card: string, start: string, end: string) {
    this.savedTimes[card] = { start, end };
    this.closeCard();
  }
}
