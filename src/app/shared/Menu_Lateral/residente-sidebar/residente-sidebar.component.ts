import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-residente-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './residente-sidebar.component.html',
  styleUrl: './residente-sidebar.component.css'
})
export class ResidenteSidebarComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

//Cerrar sesión
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
