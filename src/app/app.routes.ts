import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoahomeComponent } from './pages/pessoahome/pessoahome.component';
import { PessoacadastroComponent } from './pages/pessoacadastro/pessoacadastro.component';
import { PessoaeditarComponent } from './pages/pessoaeditar/pessoaeditar.component';
import { EnderecohomeComponent } from './pages/enderecohome/enderecohome.component';
import { EnderecoeditarComponent } from './pages/enderecoeditar/enderecoeditar.component';
import { EnderecocadastroComponent } from './pages/enderecocadastro/enderecocadastro.component';

export const routes: Routes = [
    {path:'', component: HomeComponent}, 
    {path:'pessoaeditar/:id', component: PessoaeditarComponent}, 
    {path:'pessoacadastro', component: PessoacadastroComponent},
    {path:'pessoahome', component: PessoahomeComponent},
    {path:'enderecoeditar/:id', component: EnderecoeditarComponent}, 
    {path:'enderecocadastro', component: EnderecocadastroComponent},
    {path:'enderecohome', component: EnderecohomeComponent},
];
