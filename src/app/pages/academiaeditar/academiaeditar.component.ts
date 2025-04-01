import { Component } from '@angular/core';
import { AcademiaformularioComponent } from "../../componentes/academiaformulario/academiaformulario.component";
import { AcademiaListar } from '../../models/academia';
import { AcademiaService } from '../../services/academia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academiaeditar',
  imports: [CommonModule, AcademiaformularioComponent],
  templateUrl: './academiaeditar.component.html',
  styleUrl: './academiaeditar.component.css'
})
export class AcademiaeditarComponent {
  btnAcao = "Editar";
  descTitulo = "Editar Academia";
  academia!: AcademiaListar;
  constructor(private academiaService:AcademiaService, private router: Router, private route:ActivatedRoute) {}
  ngOnInit(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.academiaService.GetAcademiaPorId(id).subscribe(response =>{
      this.academia = response;
    })
  }
  editarAcademia(academia: AcademiaListar){
    academia.id = this.academia.id;  
    this.academiaService.EditarAcademia(academia).subscribe(response => {
      this.router.navigate(['/academiahome']);
    });
  }

}
