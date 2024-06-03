import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PerfilProfComponent } from './components/perfil-prof/perfil-prof.component';
import { CadastroUserComponent } from './components/cadastro-user/cadastro-user.component';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TelaPerfilComponent } from './components/tela-perfil/tela-perfil.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilProfComponent,
    CadastroUserComponent,
    LoginCadastroComponent,
    NavbarComponent,
    TelaPerfilComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
