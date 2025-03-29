import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EnderecoListar } from '../../models/endereco';
import { EnderecoService } from '../../services/endereco.service';

@Component({
    selector: 'app-enderecohome',
    standalone: true,
    imports: [RouterModule, FormsModule],
    templateUrl: './enderecohome.component.html',
    styleUrl: './enderecohome.component.css'
})
export class EnderecohomeComponent {
    enderecos: EnderecoListar[] = [];
    enderecosGeral: EnderecoListar[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 5;
    searchValue: string = '';
    
    constructor(private serviceEndereco: EnderecoService) {}
    
    ngOnInit(): void {
        this.loadEnderecos();
    }

    loadEnderecos() {
        this.serviceEndereco.GetEnderecos(this.currentPage, this.itemsPerPage)
        .subscribe(response => {
            this.enderecos = response;
            this.enderecosGeral = response;
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
            this.enderecos = this.enderecosGeral.filter(endereco => {
                return endereco.rua.toLowerCase().includes(this.searchValue);
            });
        } else {
            this.enderecos = [...this.enderecosGeral];
        }
    }

    ItemsPerPageChange() {
        if (this.itemsPerPage < 1) {
            this.itemsPerPage = 1;
        }
        this.loadEnderecos();
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.loadEnderecos();
        }
    }

    nextPage() {
        if (this.enderecos.length > 0) {
            this.currentPage++;
            this.loadEnderecos();
        }
    }

    deletar(id: string | undefined) {
        this.serviceEndereco.DeletarEndereco(id).subscribe(response => {
            this.loadEnderecos();
        });
    }
}