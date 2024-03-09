import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { ProductCreateComponent } from './Pages/product-create/product-create.component';
import { LoaderComponent } from './Pages/Partials/loader/loader.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ProductEditComponent } from './Pages/product-edit/product-edit.component';
import { CategoryPageComponent } from './Pages/category-page/category-page.component';
import { CategoryCreateComponent } from './Pages/category-create/category-create.component';
import { CategoryEditComponent } from './Pages/category-edit/category-edit.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    ProductCreateComponent,
    LoaderComponent,
    ProductPageComponent,
    ProductEditComponent,
    CategoryPageComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule {}
