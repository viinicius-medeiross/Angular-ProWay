import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
@Input() sobrenome =" Da Silva";

mostraNomeCompleto(nomeCompleto: any) {
  alert(`O nome completo é: ${nomeCompleto}`);
}
}
