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



  }

