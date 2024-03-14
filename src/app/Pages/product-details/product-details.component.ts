import { Component, OnInit } from '@angular/core';
import { ProductService, ProductDetailsResponse } from '../../Services/product.service';
import { ProductDetails } from '../../Services/ProductDetails';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  constructor(private productService: ProductService){}
  // _products!: ProductDetailsResponse[];
  _products: ProductDetails[] = [];
  error: any;
  currentPage: number = 1;
  totalPages: number = 0;
  limit: number = 10;
  ngOnInit(){
    this.getProductsDetails();
  }
  // getProductsDetails(){
  //   this.productService.getProductsDetails().subscribe((res: any)=>{
  //     console.log(res);
  //     this._products = res;
  //   });
  // }
  async getProductsDetails(){
    try{
      const {productsdetails,total} = await this.productService.getProductDetailsByLimit(
        this.currentPage,
        this.limit
      );
      const startIndex = (this.currentPage-1)*this.limit
      const endIndex = this.currentPage*this.limit
      this._products = productsdetails.slice(startIndex,endIndex);
      this.totalPages = Math.ceil(total / this.limit);
      console.log(productsdetails);
    }catch(error){
      this.error=error;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getProductsDetails();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProductsDetails();
    }
  }
}
