import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoahomeComponent } from './pages/pessoahome/pessoahome.component';
import { PessoacadastroComponent } from './pages/pessoacadastro/pessoacadastro.component';
import { PessoaeditarComponent } from './pages/pessoaeditar/pessoaeditar.component';

export const routes: Routes = [
    {path:'', component: HomeComponent}, 
    {path:'pessoaeditar/:id', component: PessoaeditarComponent}, 
    {path:'pessoacadastro', component: PessoacadastroComponent},
    {path:'pessoahome', component: PessoahomeComponent}
];
