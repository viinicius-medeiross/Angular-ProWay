import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Vinícius Medeiros";
  dataNascimento = '2003/02/03';
  urlImagem = "/assets/MickeyMouse.webp";

  mostrarDataNascimento() {
    alert(`A data de nsacimento de ${this.nome} é : ${this.dataNascimento}`)
  };
}
