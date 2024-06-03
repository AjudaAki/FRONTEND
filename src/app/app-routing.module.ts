import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PerfilProfComponent } from "./components/perfil-prof/perfil-prof.component";
import { CadastroUserComponent } from "./components/cadastro-user/cadastro-user.component";
import { LoginCadastroComponent } from "./components/login-cadastro/login-cadastro.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TelaPerfilComponent } from "./components/tela-perfil/tela-perfil.component";
import { TelaProfessoresComponent } from "./components/tela-professores/tela-professores.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'perfil-prof', component: PerfilProfComponent},
    {path: 'cadastro-user', component: CadastroUserComponent},
    {path: 'login', component: LoginCadastroComponent},
    {path: 'navbar', component: NavbarComponent },
    {path: 'perfil', component: TelaPerfilComponent},
    {path: 'professores', component: TelaProfessoresComponent},
];


@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}