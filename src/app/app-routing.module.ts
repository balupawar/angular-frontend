import { NgModule } from '@angular/core';
import {RouterModule ,Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { ProductCreateComponent } from './Pages/product-create/product-create.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ProductEditComponent } from './Pages/product-edit/product-edit.component';
import { CategoryPageComponent } from './Pages/category-page/category-page.component';
import { CategoryCreateComponent } from './Pages/category-create/category-create.component';
import { CategoryEditComponent } from './Pages/category-edit/category-edit.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent, title: 'Home Page'},
    {path: 'about-us', component: AboutPageComponent, title: 'About Page'},
    {path: 'contact-us', component: ContactPageComponent, title: 'Contact Page'},
    {path: 'products/create', component: ProductCreateComponent, title: 'Product Create'},
    {path: 'products', component: ProductPageComponent, title: 'Product List'},
    {path: 'products/:id/edit', component: ProductEditComponent, title: 'Product Edit'},
    {path: 'category', component: CategoryPageComponent, title: 'Category List'},
    {path: 'category/create', component: CategoryCreateComponent, title: 'Category Create'},
    {path: 'category/:id/edit', component: CategoryEditComponent, title: 'Category Edit'},
    {path: 'productDetails', component: ProductDetailsComponent, title: 'Product Details'},
  ];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
