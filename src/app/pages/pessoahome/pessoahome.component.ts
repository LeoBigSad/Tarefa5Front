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
  pessoasGeral: PessoaListar[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  searchValue: string = '';

  constructor(private servicePessoa: PessoaService) {}

  ngOnInit(): void {
    this.loadPessoa();
  }

  loadPessoa() {
    this.servicePessoa.GetPessoas(this.currentPage, this.itemsPerPage).subscribe(response => {
      this.pessoas = response;
      this.pessoasGeral = response;
      this.applySearch(); 
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value.toLowerCase();
    this.applySearch();
  }

  applySearch() {
    if (this.searchValue) {
      this.pessoas = this.pessoasGeral.filter(pessoa => {
        return pessoa.nome.toLowerCase().includes(this.searchValue);
      });
    } else {
      this.pessoas = [...this.pessoasGeral];
    }
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

  ItemsPerPageChange() {
    if (this.itemsPerPage < 1) {
      this.itemsPerPage = 1;
    }
    this.loadPessoa();
  }

  deletar(id: string | undefined) {
    this.servicePessoa.DeletarPessoa(id).subscribe(response => {
      this.loadPessoa();
    });
  }
}