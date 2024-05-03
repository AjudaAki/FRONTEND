import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PerfilProfComponent } from "./components/perfil-prof/perfil-prof.component";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { CadastroUserComponent } from "./components/cadastro-user/cadastro-user.component";
import { LoginCadastroComponent } from "./components/login-cadastro/login-cadastro.component";
import { ModalProfComponent } from "./components/modal-prof/modal-prof.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'perfil-prof', component: PerfilProfComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro-user', component: CadastroUserComponent},
    {path: 'login', component: LoginCadastroComponent},
    {path: 'prof', component: ModalProfComponent},
];


@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}