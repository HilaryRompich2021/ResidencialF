import { Routes }           from '@angular/router';
import { HomeComponent } from './shared/Pages - Bienvenida/Bienvenida_Administrador/Home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { ResidenteGuard } from './guards/residente.guard';
import { AdminOResidenteGuard } from './guards/admin-o-residente.guard';
import RegisterPaqueteComponent from './Correspondencia/register-paquete/register-paquete.component';


export const routes: Routes = [

  { path: '',       redirectTo: 'auth', pathMatch: 'full' },

//Login
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth/auth.component').then(m => m.default)

  },

  {
    path: 'BienvenidaAdmin', component: HomeComponent
  },


  /**Rutas Residente*/
  //Menu lateral
  {
    path: 'home',
    canActivate: [AdminGuard],
    loadComponent: () => import('./shared/Menu_Lateral/administrador-sidebar/sidebar.component').then(m => m.default)
  },


  {
    path: 'registro',
    canActivate: [AdminGuard],
    loadComponent: () => import('./registro/registro.component').then(m => m.default)
  },


  {
    path: 'visitantes',
    canActivate: [AdminGuard],
    loadComponent: () => import('./visitante/visitante/visitante.component').then(m => m.default)

  },

  
  {
    path: 'enqr-scanner',
    canActivate: [AdminGuard],
    loadComponent: () => import('./qr-scanner/qr-scanner.component').then(m => m.default)
  },

  {
    path: 'salqr-scanner',
    canActivate: [AdminGuard],
    loadComponent: () => import('./qr-scanner/qr-scannersal/qr-scannersal.component').then(m => m.default)
  },


  /**Rutas Residente*/
  {
    path: 'visitanteresidente',
    canActivate: [ResidenteGuard],
    loadComponent: () => import('./visitante-residente/visitante-residente.component').then(m => m.default)
  },


  /**Rutas Generales*/
  //Ruta Pago Administrador y Residente
  {
    path: 'pagos',
    canActivate: [AdminOResidenteGuard],
    loadComponent: () => import('./pagos/pagos.component').then(m => m.default)

  },

  {
    path: 'reserva',
    canActivate: [AdminOResidenteGuard],
    loadComponent: () => import('./reserva/reserva.component').then(m => m.default)

  },

  //Ruta directorio general
  {
    path: 'directorio',
    loadComponent: () => import('./directorio/directorio.component').then(m => m.default)
  },

  {
    path: 'notificaciones',
    loadComponent: () => import('./notificaciones/notificaciones.component').then(m => m.default)
  },

  {
    path: 'soporte',
    loadComponent: () => import('./soporte/soporte.component').then(m => m.default)
  },

  {
    path: 'excedente',
    loadComponent: () => import('./pagos/excedente-agua/excedente-agua.component').then(m => m.default)
  },


  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.component').then(m => m.default)
  },

  {
    path: 'paquete/registrar',
    loadComponent: () => import('./Correspondencia/register-paquete/register-paquete.component').then(m => m.default)
  },

  {
    path: 'paquete/validar',
    loadComponent: () => import('./Correspondencia/validate-paquete/validate-paquete.component').then(m => m.default)
  },

  {
    path: '**',
    redirectTo: 'auth',
  }
];
