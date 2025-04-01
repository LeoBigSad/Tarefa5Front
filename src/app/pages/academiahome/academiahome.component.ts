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
  searchValue: string = '';

  constructor(private serviceAcademia: AcademiaService) {}

  ngOnInit(): void {
    this.loadAcademias();
  }

  loadAcademias() {
    this.serviceAcademia. GetAcademias().subscribe(response => {
      this.academias = response;
      this.academiasGeral = response;
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
      this.academias = this.academiasGeral.filter(academia => {
        return academia.name.toLowerCase().includes(this.searchValue);
      });
    } else {
      this.academias = [...this.academiasGeral];
    }
  }

  deletar(id: string | undefined) {
    this.serviceAcademia.DeletarAcademia(id).subscribe(response => {
      this.loadAcademias();
    });
  }
}
