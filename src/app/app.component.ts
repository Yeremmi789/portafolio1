import { Component, NgModule, OnInit, ViewChild  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NgOptimizedImage } from '@angular/common';

// Importando componentes para reutilizarlos
import {BuscadorComponent} from './reutilizables/buscador/buscador.component';

//
import { GalleryModule, GalleryItem, ImageItem, GalleryComponent } from 'ng-gallery';
import { ProductoCarouselComponent } from './reutilizables/producto-carousel/producto-carousel.component';
import { CarouselV1Component } from './reutilizables/carousel-v1/carousel-v1.component';
import { FooterComponent } from './reutilizables/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgOptimizedImage,
    BuscadorComponent,
    GalleryModule,
    ProductoCarouselComponent,

    CarouselV1Component, //solo para tener una plantilla v1
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  // template: `<h1> HOLALALALAL <h1>`, // Para colocar directamente la estructura del html aquí
  // styles: `li { color: red; font-weight: 300; }`,// para colocar directamente los estilos aquí
  styleUrl: './app.component.css',

  template: `
    <gallery></gallery>
  `,

})
export class AppComponent implements OnInit{
  title = 'portafolio1';

  @ViewChild(GalleryComponent) gallery!: GalleryComponent;

  items: ImageItem[] = [];

  ngOnInit() {

    this.items = [
      new ImageItem({ src: 'assets/carousel/c1-1.jpeg', thumb: 'assets/carousel/c1-1.jpeg' }),
      new ImageItem({ src: 'assets/carousel/c1-2.jpg', thumb: 'assets/carousel/c1-2.jpg' }),
      new ImageItem({ src: 'assets/carousel/c1-3.jpg', thumb: 'assets/carousel/c1-3.jpg' }),
    ];


    // // Opción adicional para cargar los elementos en la galería
    // if (this.gallery) {
    //   this.gallery.load(this.items);
    // }


  }

}

@NgModule({
  imports: [
    InicioComponent,
    RouterModule.forRoot([]),
    BrowserModule,

  ],
})

class MyNgModule {}
