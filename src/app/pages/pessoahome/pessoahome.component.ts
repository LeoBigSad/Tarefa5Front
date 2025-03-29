import { Component } from '@angular/core';
import { PessoaListar } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoahome',
  imports: [RouterModule, FormsModule],
  templateUrl: './pessoahome.component.html',
  styleUrl: './pessoahome.component.css'
})
export class PessoahomeComponent {
  pessoas: PessoaListar[] = [];
    pessoasGeral : PessoaListar[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 5;
  
    constructor(private servicePessoa:PessoaService){}
    
    ngOnInit(): void {
      this.loadPessoa();
    }
    loadPessoa(){
      this.servicePessoa.GetPessoas(this.currentPage, this.itemsPerPage).subscribe(response =>{
        this.pessoas = response;
        this.pessoasGeral = response;
      } )
    }
    search(event:Event){
      const target = event.target as HTMLInputElement;
      const value = target.value.toLowerCase();
  
      this.pessoas = this.pessoasGeral.filter(pessoa => {
          return pessoa.nome.toLowerCase().includes(value);
      })
    }
    deletar(id: string | undefined){
      this.servicePessoa.DeletarPessoa(id).subscribe(response => {
        this.loadPessoa();
      })
    }
    ItemsPerPageChange() {
      if (this.itemsPerPage < 1) {
          this.itemsPerPage = 1;
      }
      if (this.itemsPerPage > 100) {
          this.itemsPerPage = 100;
      }
      this.currentPage = 1;
      this.loadPessoa();
  }

  previousPage() {
      if (this.currentPage > 1) {
          this.currentPage--;
          this.loadPessoa();
      }
  }

  nextPage() {
      if (this.pessoas.length > 0) {
          this.currentPage++;
          this.loadPessoa();
      }
  }
}
