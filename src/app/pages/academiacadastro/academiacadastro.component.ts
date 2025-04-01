import { Component } from '@angular/core';
import { AcademiaformularioComponent } from '../../componentes/academiaformulario/academiaformulario.component';
import { AcademiaService } from '../../services/academia.service';
import { Router } from '@angular/router';
import { AcademiaListar } from '../../models/academia';

@Component({
  selector: 'app-academiacadastro',
  imports: [AcademiaformularioComponent],
  templateUrl: './academiacadastro.component.html',
  styleUrl: './academiacadastro.component.css'
})
export class AcademiacadastroComponent {
  btnAcao = "Cadastrar"
  descTitulo = "Cadastrar Academia"
  constructor(private academiaService: AcademiaService, private router:Router){}
  criarAcademia(academia: AcademiaListar){
    this.academiaService.CriarAcademia(academia).subscribe(response => {
        this.router.navigate(['/academiahome']);
    })
  }
}
