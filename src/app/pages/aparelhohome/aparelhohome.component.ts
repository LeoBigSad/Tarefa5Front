import { Component, OnInit } from '@angular/core';
import { AparelhoListar } from '../../models/aparelho';
import { AparelhoService } from '../../services/aparelho.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aparelhohome',
  imports: [RouterModule, FormsModule],
  templateUrl: './aparelhohome.component.html',
  styleUrl: './aparelhohome.component.css'
})
export class AparelhohomeComponent implements OnInit {
  aparelhos: AparelhoListar[] = [];
  aparelhosGeral: AparelhoListar[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  searchValue: string = '';
  constructor(private serviceAparelho: AparelhoService) {}

  ngOnInit(): void {
    this.loadAparelhos();
  }

  loadAparelhos() {
    this.serviceAparelho.GetAparelhos().subscribe(response => {
      this.aparelhosGeral = response;
      this.applyPagination();
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value.toLowerCase();
    if (this.searchValue) {
      this.aparelhos = this.aparelhos.filter(aparelho => 
        aparelho.name.toLowerCase().includes(this.searchValue)
      );
    } else {
      // Se a busca estiver vazia, recarrega a página atual
      this.applyPagination();
    }
  }

  applyPagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.aparelhos = this.aparelhosGeral.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchValue = ''; // Limpa a busca ao mudar de página
      this.applyPagination();
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.aparelhosGeral.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.searchValue = ''; // Limpa a busca ao mudar de página
      this.applyPagination();
    }
  }

  ItemsPerPageChange() {
    if (this.itemsPerPage < 1) {
      this.itemsPerPage = 1;
    }
    this.currentPage = 1;
    this.searchValue = ''; // Limpa a busca ao mudar itens por página
    this.applyPagination();
  }

  deletar(id: string | undefined) {
    this.serviceAparelho.DeletarAparelho(id).subscribe(response => {
      this.loadAparelhos();
    });
  }
}