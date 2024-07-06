import { Routes } from '@angular/router';

// añadido - nuevo
import { InicioComponent } from './paginas/inicio/inicio.component'
import { DetailsComponent } from './paginas/details/details.component'
import { LibreriasComponent } from './paginas/librerias/librerias.component';
import { VistaPreviaComponent } from './paginas/vista-previa/vista-previa.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { LoginComponent } from './paginas/login/login.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: 'Pagina de inicio' },
  { path: 'detalles', component: DetailsComponent, title: 'Pagina de detalles'  },
  { path: 'librerias', component: LibreriasComponent, title: 'Prueba'  },
  { path: 'preview/:id', component: VistaPreviaComponent, title: 'Previa'},
  { path: 'productos', component: ProductosComponent, title: 'Juegos'},
  { path: 'registro', component: RegistroComponent, title: 'Registrarme'},
  { path: 'login', component: LoginComponent, title: 'Ingresar'},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' } // Ruta de fallback
];

export default routes;
