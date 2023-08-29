import { Router} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roteamento';
  constructor(
    private router: Router
    ) {}

    moverParaPrimeiraPagina( ) {
    this.router.navigate(["primeira-pagina"]);


  }
}
