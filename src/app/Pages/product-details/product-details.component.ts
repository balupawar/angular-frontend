import { Component } from '@angular/core';
import { ProductService, ProductDetailsResponse } from '../../Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private productService: ProductService){}
  _products!: ProductDetailsResponse[];
  ngOnInit(){
    this.getProductsDetails();
  }
  getProductsDetails(){
    this.productService.getProductsDetails().subscribe((res: any)=>{
      console.log(res);
      this._products = res;
    });
  }
}
