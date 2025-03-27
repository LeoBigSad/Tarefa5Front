import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnderecoListar } from '../../models/endereco';

@Component({
  selector: 'app-enderecoformulario',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './enderecoformulario.component.html',
  styleUrl: './enderecoformulario.component.css'
})
export class EnderecoformularioComponent {
  @Input() btnAcao!:string;
  @Input() descTitulo!:string;
  @Input() dadosEndereco: EnderecoListar | null = null
  @Output() onSubmit = new EventEmitter<EnderecoListar>();

  enderecoForm!: FormGroup;

ngOnInit(): void {
  this.enderecoForm = new FormGroup({
    id: new FormControl(this.dadosEndereco?.id ??  '00000000-0000-0000-0000-000000000000'),
    rua: new FormControl(this.dadosEndereco?.rua ?? ''),
    numero: new FormControl(this.dadosEndereco?.numero ?? ''),
    complemento: new FormControl(this.dadosEndereco?.complemento ?? ''),
    bairro: new FormControl(this.dadosEndereco?.bairro ?? ''),
    cidade: new FormControl(this.dadosEndereco?.cidade ?? ''),
    estado: new FormControl(this.dadosEndereco?.estado ?? ''),
    cep: new FormControl(this.dadosEndereco?.cep ?? '')
  });
}
  submit(){
    this.onSubmit.emit(this.enderecoForm.value);
  }

}
