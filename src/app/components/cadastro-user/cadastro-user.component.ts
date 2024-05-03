import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent {

  showProf: boolean = false;
  showDados: boolean = true;
  showEndereco: boolean = false;
  showPerfil: boolean = false;
  showConfirmar : boolean = false;
  showProximo: boolean = true;
  showModal: boolean = false;
  step: number = 1;


  constructor(private router: Router) { }  

  
  voltarStep() {
    
    if(this.step === 1) {
      this.router.navigateByUrl(''); 
    }

    else if(this.step === 2){
      this.showEndereco = false;
      this.showProximo = true;
      this.showDados = true;
      this.step = this.step - 1;
    }
  
    else if(this.step === 3){
      this.showConfirmar = false;
      this.showProximo = true;
      this.showEndereco = true;
      this.showPerfil = false;
      this.step = this.step - 1;
    }

    else if(this.step === 4){
      this.showProf = false;
      this.showPerfil = true;
      this.showConfirmar = true;
      this.showProximo = false;
      this.step = this.step - 1;
    }

    console.log(this.step);
  }


  toggleSwitch() {

    if (this.step === 1) {
      this.showDados = false;
      this.showEndereco = true;
      this.step++;
    }

    else if(this.step === 2){
      this.showEndereco = false;
      this.showPerfil = true;
      this.showProximo = false;
      this.showConfirmar = true;
      this.step++;
    }

    else if(this.step === 3){
      this.showModal = !this.showModal;
    }

    else if(this.step === 4){
      this.showProf = true
    }

    console.log(this.step);
  }

  

}
