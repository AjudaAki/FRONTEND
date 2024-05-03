import { Component } from '@angular/core';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  img_switch: string = '/assets/images/toggle_off.png';
  modoAluno: boolean = true; // Estado inicial: Modo Aluno
  canShow: boolean = false;


  toggleSwitch() {
    this.img_switch = this.img_switch === '/assets/images/toggle_off.png' ? '/assets/images/toggle_on.png' : '/assets/images/toggle_off.png';
    this.modoAluno = !this.modoAluno;
    if(this.canShow == true) {
      this.canShow = false;
    }
    else{
      this.canShow = true
      //alert('novos campos adicionados!')
    }
  }


}
