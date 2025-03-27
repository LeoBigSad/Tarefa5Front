import { Component } from '@angular/core';
import { PessoaListar } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pessoahome',
  imports: [RouterModule],
  templateUrl: './pessoahome.component.html',
  styleUrl: './pessoahome.component.css'
})
export class PessoahomeComponent {
  pessoas: PessoaListar[] = [];
    pessoasGeral : PessoaListar[] = [];
  
    constructor(private servicePessoa:PessoaService){}
    
    ngOnInit(): void {
      this.servicePessoa.GetPessoas().subscribe(response =>{
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
        window.location.reload()
      })
    }

}
