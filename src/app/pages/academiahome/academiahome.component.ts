import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AcademiaListar } from '../../models/academia';
import { AcademiaService } from '../../services/academia.service';

@Component({
  selector: 'app-academiahome',
  imports: [RouterModule, FormsModule],
  templateUrl: './academiahome.component.html',
  styleUrl: './academiahome.component.css'
})
export class AcademiahomeComponent implements OnInit{
  academias: AcademiaListar[] = [];
  academiasGeral: AcademiaListar[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  searchValue: string = '';

  constructor(private serviceAcademia: AcademiaService) {}

  ngOnInit(): void {
    this.loadAcademias();
  }

  loadAcademias() {
    this.serviceAcademia.GetAcademias().subscribe(response => {
      this.academiasGeral = response;
      this.applyPagination();
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value.toLowerCase();
    if (this.searchValue) {
      this.academias = this.academias.filter(academia => 
        academia.name.toLowerCase().includes(this.searchValue)
      );
    } else {
      // Se a busca estiver vazia, recarrega a página atual
      this.applyPagination();
    }
  }

  applyPagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.academias = this.academiasGeral.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchValue = ''; // Limpa a busca ao mudar de página
      this.applyPagination();
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.academiasGeral.length / this.itemsPerPage);
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
    this.serviceAcademia.DeletarAcademia(id).subscribe(response => {
      this.loadAcademias();
    });
  }
}