import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaListar } from '../../models/pessoa';
import { CommonModule } from '@angular/common';
import { PessoaformularioComponent } from "../../componentes/pessoaformulario/pessoaformulario.component";

@Component({
  selector: 'app-pessoaeditar',
  imports: [CommonModule, PessoaformularioComponent],
  templateUrl: './pessoaeditar.component.html',
  styleUrl: './pessoaeditar.component.css'
})
export class PessoaeditarComponent {
  btnAcao = "Editar";
  descTitulo = "Editar Usuarios";
  pessoa!: PessoaListar;
  constructor(private pessoaService:PessoaService, private router: Router, private route:ActivatedRoute) {}
  ngOnInit(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.pessoaService.GetPessoaPorId(id).subscribe(response =>{
      this.pessoa = response;
    })
  }
  editarPessoa(pessoa: PessoaListar){
    pessoa.id = this.pessoa.id;  
    this.pessoaService.EditarPessoa(pessoa).subscribe(response => {
      this.router.navigate(['/pessoahome']);
    });
  }

}
