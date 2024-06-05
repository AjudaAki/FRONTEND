import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveButtonService {
  private activeButton: string = 'professores';

  setActiveButton(button: string) {
    this.activeButton = button;
  }

  getActiveButton(): string {
    return this.activeButton;
  }
}
