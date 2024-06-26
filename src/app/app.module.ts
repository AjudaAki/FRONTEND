import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importações dos componentes
import { HomeComponent } from './components/home/home.component';
import { PerfilProfComponent } from './components/perfil-prof/perfil-prof.component';
import { CadastroUserComponent } from './components/cadastro-user/cadastro-user.component';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TelaPerfilComponent } from './components/tela-perfil/tela-perfil.component';
import { TelaProfessoresComponent } from './components/tela-professores/tela-professores.component';
import { TelaFavoritosComponent } from './components/tela-favoritos/tela-favoritos.component';
import { CardProfComponent } from './components/card-prof/card-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilProfComponent,
    CadastroUserComponent,
    LoginCadastroComponent,
    NavbarComponent,
    TelaPerfilComponent,
    TelaProfessoresComponent,
    TelaFavoritosComponent,
    CardProfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
