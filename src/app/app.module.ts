import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PerfilProfComponent } from './components/perfil-prof/perfil-prof.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroUserComponent } from './components/cadastro-user/cadastro-user.component';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { ModalProfComponent } from './components/modal-prof/modal-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilProfComponent,
    CadastroComponent,
    CadastroUserComponent,
    LoginCadastroComponent,
    ModalProfComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
