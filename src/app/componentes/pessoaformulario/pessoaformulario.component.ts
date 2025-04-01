import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { PessoaListar } from '../../models/pessoa';


@Component({
  selector: 'app-pessoaformulario',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './pessoaformulario.component.html',
  styleUrl: './pessoaformulario.component.css'
})
export class PessoaformularioComponent implements OnInit {
  @Input() btnAcao!:string;
  @Input() descTitulo!:string;
  @Input() dadosPessoa: PessoaListar | null = null
  @Output() onSubmit = new EventEmitter<PessoaListar>();

  pessoaForm!: FormGroup;

ngOnInit(): void {
  this.pessoaForm = new FormGroup({
    id: new FormControl(this.dadosPessoa?.id ?? '00000000-0000-0000-0000-000000000000'),
    nome: new FormControl(this.dadosPessoa?.nome ?? ''),
    dataNascimento: new FormControl(this.dadosPessoa?.dataNascimento ?? '')
  });
}
  submit(){
    this.onSubmit.emit(this.pessoaForm.value);
  }
}
