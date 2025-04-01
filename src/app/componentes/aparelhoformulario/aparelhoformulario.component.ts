import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AparelhoListar } from '../../models/aparelho';

@Component({
  selector: 'app-aparelhoformulario',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './aparelhoformulario.component.html',
  styleUrl: './aparelhoformulario.component.css'
})
export class AparelhoformularioComponent implements OnInit {
  @Input() btnAcao!:string;
  @Input() descTitulo!:string;
  @Input() dadosAparelho: AparelhoListar | null = null
  @Output() onSubmit = new EventEmitter<AparelhoListar>();

  aparelhoForm!: FormGroup;

ngOnInit(): void {
  this.aparelhoForm = new FormGroup({
    id: new FormControl(this.dadosAparelho?.id ?? '00000000-0000-0000-0000-000000000000'),
    name: new FormControl(this.dadosAparelho?.name ?? '')
  });
}
  submit(){
    this.onSubmit.emit(this.aparelhoForm.value);
  }
}
