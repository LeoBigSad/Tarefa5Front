import { Component } from '@angular/core';
import { AparelhoformularioComponent } from "../../componentes/aparelhoformulario/aparelhoformulario.component";
import { CommonModule } from '@angular/common';
import { AparelhoListar } from '../../models/aparelho';
import { ActivatedRoute, Router } from '@angular/router';
import { AparelhoService } from '../../services/aparelho.service';

@Component({
  selector: 'app-aparelhoeditar',
  imports: [CommonModule, AparelhoformularioComponent],
  templateUrl: './aparelhoeditar.component.html',
  styleUrl: './aparelhoeditar.component.css'
})
export class AparelhoeditarComponent {
  btnAcao = "Editar";
  descTitulo = "Editar Aparelho";
  aparelho!: AparelhoListar;
  constructor(private aparelhoService:AparelhoService, private router: Router, private route:ActivatedRoute) {}
  ngOnInit(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.aparelhoService.GetAparelhoPorId(id).subscribe(response =>{
      this.aparelho = response;
    })
  }
  editarAparelho(aparelho: AparelhoListar){
    aparelho.id = this.aparelho.id;  
    this.aparelhoService.EditarAparelho(aparelho).subscribe(response => {
      this.router.navigate(['/aparelhohome']);
    });
  }
}
