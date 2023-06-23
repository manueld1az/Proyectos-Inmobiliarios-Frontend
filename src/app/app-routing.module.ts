import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guardian de rutas privadas para usuarios registrados
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'compra-venta',
    loadChildren: () =>
      import('./modules/compra-venta/compra-venta.module').then(
        (module) => module.CompraVentaModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'compra-venta',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
