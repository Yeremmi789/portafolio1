import { Routes } from '@angular/router';

// añadido - nuevo
import { InicioComponent } from './paginas/inicio/inicio.component'
import { DetailsComponent } from './paginas/details/details.component'
import { LibreriasComponent } from './paginas/librerias/librerias.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: 'Pagina de inicio' },
  { path: 'detalles', component: DetailsComponent, title: 'Pagina de detalles'  },
  { path: 'librerias', component: LibreriasComponent, title: 'Prueba'  }
];

export default routes;
