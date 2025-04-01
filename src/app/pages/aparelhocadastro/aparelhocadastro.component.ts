import { Component } from '@angular/core';
import { AparelhoformularioComponent } from '../../componentes/aparelhoformulario/aparelhoformulario.component';
import { AparelhoService } from '../../services/aparelho.service';
import { AparelhoListar } from '../../models/aparelho';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aparelhocadastro',
  imports: [AparelhoformularioComponent],
  templateUrl: './aparelhocadastro.component.html',
  styleUrl: './aparelhocadastro.component.css'
})
export class AparelhocadastroComponent {
  btnAcao = "Cadastrar"
  descTitulo = "Cadastrar Aparelho"
  constructor(private aparelhoService: AparelhoService, private router:Router){}
  criarAparelho(aparelho: AparelhoListar){
    this.aparelhoService.CriarAparelho(aparelho).subscribe(response => {
        this.router.navigate(['/aparelhohome']);
    })
  }
}
