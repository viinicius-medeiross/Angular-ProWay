import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css'],
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: "Iphone 8 ", descricao: "celular Pequeno", esgotado: true},
    { id: 2, nome: "Iphone 13 Pro", descricao: "celular Médio", esgotado: false},
    { id: 3, nome: "Iphone 14 Pro Max", descricao: "celular grande", esgotado: true},
  ]
}
