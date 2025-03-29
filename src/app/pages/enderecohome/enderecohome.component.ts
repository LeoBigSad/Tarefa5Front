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
    
    constructor(private serviceEndereco: EnderecoService) {}
    
    ngOnInit(): void {
        this.loadEnderecos();
    }

    loadEnderecos() {
        this.serviceEndereco.GetEnderecos(this.currentPage, this.itemsPerPage)
            .subscribe(response => {
                this.enderecos = response;
                this.enderecosGeral = response;
            });
    }

    ItemsPerPageChange() {
        if (this.itemsPerPage < 1) {
            this.itemsPerPage = 1;
        }
        if (this.itemsPerPage > 100) {
            this.itemsPerPage = 100;
        }
        this.currentPage = 1;
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

    search(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = target.value.toLowerCase();
        
        this.enderecos = this.enderecosGeral.filter(endereco => {
            return endereco.rua.toLowerCase().includes(value);
        });
    }

    deletar(id: string | undefined) {
        this.serviceEndereco.DeletarEndereco(id).subscribe(response => {
            this.loadEnderecos();
        });
    }
}