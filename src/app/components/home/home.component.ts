import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;  // Total number of slides
  intervalId: any;  // ID do intervalo para limpar mais tarde

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Muda de slide a cada 5 segundos
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  setSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
    this.stopAutoSlide(); // Para o temporizador quando um slide é manualmente selecionado
    this.startAutoSlide(); // Reinicia o temporizador
  }
}
