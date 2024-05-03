import { Component, Input } from '@angular/core';
import { CadastroUserComponent } from '../cadastro-user/cadastro-user.component';
@Component({
  selector: 'app-modal-prof',
  templateUrl: './modal-prof.component.html',
  styleUrls: ['./modal-prof.component.css']
})
export class ModalProfComponent {
  
  constructor(private CadastroUserComponent: CadastroUserComponent) {}

  @Input() showModal: boolean = true;
           showPerfil: boolean = true;



  fecharModal(){
      this.CadastroUserComponent.showModal = false;
  }

  continuarCadastro(){

    if(this.CadastroUserComponent.step === 3){
      this.CadastroUserComponent.showModal = false;
      this.CadastroUserComponent.showPerfil = false;
      this.CadastroUserComponent.showProf = true;
      this.CadastroUserComponent.showConfirmar = false;
      this.CadastroUserComponent.showProximo = true;
      this.CadastroUserComponent.step++;

      console.log(this.CadastroUserComponent.step)
    }


  }

}