import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnderecoListar } from '../../models/endereco';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-enderecohome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './enderecohome.component.html',
  styleUrl: './enderecohome.component.css'
})
export class EnderecohomeComponent {
    enderecos: EnderecoListar[] = [];
    enderecosGeral : EnderecoListar[] = [];
    
      constructor(private serviceEndereco:EnderecoService){}
      
      ngOnInit(): void {
        this.serviceEndereco.GetEnderecos().subscribe(response =>{
          this.enderecos = response;
          this.enderecosGeral = response;
        } )
      }
      search(event:Event){
        const target = event.target as HTMLInputElement;
        const value = target.value.toLowerCase();
    
        this.enderecos = this.enderecosGeral.filter(endereco => {
            return endereco.rua.toLowerCase().includes(value);
        })
      }
      deletar(id: string | undefined){
        this.serviceEndereco.DeletarEndereco(id).subscribe(response => {
          window.location.reload()
        })
      }

}
