import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent {

  credentials = { email: '', senha: ''};

  constructor(private router: Router, private authService: AuthService) {}

  cadastrar(){
    this.router.navigate(['/cadastro'])
  }
}
