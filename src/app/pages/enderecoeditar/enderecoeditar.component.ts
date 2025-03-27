import { Component } from '@angular/core';
import { EnderecoformularioComponent } from '../../componentes/enderecoformulario/enderecoformulario.component';
import { CommonModule } from '@angular/common';
import { EnderecoListar } from '../../models/endereco';
import { EnderecoService } from '../../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enderecoeditar',
  imports: [CommonModule, EnderecoformularioComponent],
  templateUrl: './enderecoeditar.component.html',
  styleUrl: './enderecoeditar.component.css'
})
export class EnderecoeditarComponent {
  btnAcao = "Editar";
  descTitulo = "Editar Usuarios";
  endereco!: EnderecoListar;
  constructor(private enderecoService:EnderecoService, private router: Router, private route:ActivatedRoute) {}
  ngOnInit(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.enderecoService.GetEnderecoPorId(id).subscribe(response =>{
      this.endereco = response;
    })
  }
  editarEndereco(endereco: EnderecoListar){
    endereco.id = this.endereco.id;  
    this.enderecoService.EditarEndereco(endereco).subscribe(response => {
      this.router.navigate(['/enderecohome']);
    });
  }
}
