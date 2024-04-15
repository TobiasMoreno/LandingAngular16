import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DniComponent } from './contact/dni/dni.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    ProductDetailComponent,
    DniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Formularios tipo Plantilla
    ReactiveFormsModule, // Formularios de tipo Reactivos
    HttpClientModule // Para hacer peticiones http  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
