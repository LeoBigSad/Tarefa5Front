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
export class AparelhohomeComponent implements OnInit{
  aparelhos: AparelhoListar[] = [];
  aparelhosGeral: AparelhoListar[] = [];
  searchValue: string = '';

  constructor(private serviceAparelho: AparelhoService) {}

  ngOnInit(): void {
    this.loadAparelhos();
  }

  loadAparelhos() {
    this.serviceAparelho. GetAparelhos().subscribe(response => {
      this.aparelhos = response;
      this.aparelhosGeral = response;
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
      this.aparelhos = this.aparelhosGeral.filter(aparelho => {
        return aparelho.name.toLowerCase().includes(this.searchValue);
      });
    } else {
      this.aparelhos = [...this.aparelhosGeral];
    }
  }

  deletar(id: string | undefined) {
    this.serviceAparelho.DeletarAparelho(id).subscribe(response => {
      this.loadAparelhos();
    });
  }
}
