import { Component } from '@angular/core';
import { EnderecoService } from '../../services/endereco.service';
import { Router } from '@angular/router';
import { EnderecoListar } from '../../models/endereco';
import { EnderecoformularioComponent } from '../../componentes/enderecoformulario/enderecoformulario.component';

@Component({
  selector: 'app-enderecocadastro',
  standalone: true,
  imports: [EnderecoformularioComponent],
  templateUrl: './enderecocadastro.component.html',
  styleUrl: './enderecocadastro.component.css'
})
export class EnderecocadastroComponent {
  btnAcao = "Cadastrar"
  descTitulo = "Cadastrar Endereço"
  constructor(private enderecoService: EnderecoService, private router:Router){}
  criarEndereco(endereco: EnderecoListar){
    this.enderecoService.CriarEndereco(endereco).subscribe(response=> {
        this.router.navigate(['/enderecohome']);
    })
  }
}
