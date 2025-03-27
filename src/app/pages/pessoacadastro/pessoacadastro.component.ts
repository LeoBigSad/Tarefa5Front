import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { PessoaListar } from '../../models/pessoa';
import { Router } from '@angular/router';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";

@Component({
  selector: 'app-pessoacadastro',
  standalone: true, 
  imports: [FormularioComponent],
  templateUrl: './pessoacadastro.component.html',
  styleUrl: './pessoacadastro.component.css'
})
export class PessoacadastroComponent {
  btnAcao = "Cadastrar"
  descTitulo = "Cadastrar Usuarios"
  constructor(private pessoaService: PessoaService, private router:Router){}
  criarPessoa(pessoa: PessoaListar){
    this.pessoaService.CriarPessoa(pessoa).subscribe(response=> {
        this.router.navigate(['/pessoahome']);
    })
  }
}
