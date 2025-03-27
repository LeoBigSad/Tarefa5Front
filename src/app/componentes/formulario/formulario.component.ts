import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PessoaListar } from '../../models/pessoa';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  @Input() btnAcao!:string;
  @Input() descTitulo!:string;
  @Input() dadosPessoa: PessoaListar | null = null
  @Output() onSubmit = new EventEmitter<PessoaListar>();

  pessoaForm!: FormGroup;

// formulario.component.ts
ngOnInit(): void {
  this.pessoaForm = new FormGroup({
    id: new FormControl(this.dadosPessoa?.id ?? 0),
    nome: new FormControl(this.dadosPessoa?.nome ?? ''),
    dataNascimento: new FormControl(this.dadosPessoa?.dataNascimento ?? '')
  });
}
  
  submit(){
    this.onSubmit.emit(this.pessoaForm.value);
  }
}
