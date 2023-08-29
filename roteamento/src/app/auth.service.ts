import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZpbmljaXVzIE1lZGVpcm9zIiwiaWF0IjoxNTE2MjM5MDIyfQ.niG1G0j3_y210vHa95TaHreP-SHTaBuV39CMiwWC4q8";
  constructor() {}
  estaAutenticado(): boolean {
    return !!sessionStorage.getItem("access-token");
  }
  login(email: string, senha: string): boolean {
    if (email === "admin@admin.com.br" && senha === "123456") {
      sessionStorage.setItem("access-token", this.accessToken);
      return true;
    }
    return false;
  }
  logout() {
    sessionStorage.clear();
  }
}
