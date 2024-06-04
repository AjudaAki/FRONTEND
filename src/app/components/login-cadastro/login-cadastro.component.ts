import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  form!: FormGroup;  // Correctly type the form property

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  
      senha: ['', [Validators.required, Validators.minLength(8)]]  
    });
  }

  get email(){
    return this.form.get('email')!;
  }

  get senha() {
    return this.form.get('senha')!;
  }

  loginUser() {
    const formValue = {
      email: this.email.value,
      senha: this.senha.value,
    };

    if (this.form.valid) {
      this.authService.login(formValue).subscribe(
        (post) => {
          console.log(post);
          var token = JSON.parse(JSON.stringify(post)).token;
          localStorage.setItem('token', token);
          this.form.reset();
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
