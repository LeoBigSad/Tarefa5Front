import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AcademiaListar } from '../../models/academia';

@Component({
  selector: 'app-academiaformulario',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './academiaformulario.component.html',
  styleUrl: './academiaformulario.component.css'
})
export class AcademiaformularioComponent implements OnInit {
  @Input() btnAcao!:string;
  @Input() descTitulo!:string;
  @Input() dadosAcademia: AcademiaListar | null = null
  @Output() onSubmit = new EventEmitter<AcademiaListar>();

  academiaForm!: FormGroup;

ngOnInit(): void {
  this.academiaForm = new FormGroup({
    id: new FormControl(this.dadosAcademia?.id ?? '00000000-0000-0000-0000-000000000000'),
    name: new FormControl(this.dadosAcademia?.name ?? '')
  });
}
  submit(){
    this.onSubmit.emit(this.academiaForm.value);
  }
}
