import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../Services/product.service';


@Component({
  selector: 'app-product-create',
  standalone: false,
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})

export class ProductCreateComponent {

  constructor(private productService: ProductService) {

  }

  product_name!: string
  product_price!: number
  catrgory_id!: number

  isLoading: boolean = false;
  loadingTitle: string = 'Loading'
  errors: any = []

  saveProduct(){
    this.isLoading = true;
    this.loadingTitle = 'Saving';
    var inputData = {
      product_name: this.product_name,
      product_price: this.product_price,
      category_id: this.catrgory_id
    }

    this.productService.saveProduct(inputData).subscribe({
      next: (res: any) => {
        
        console.log(res, "response")
        this.isLoading = false;
        alert(res.message);
        this.product_name = '';
        this.product_price = 0;
        this.catrgory_id = 0;
      },
      error: (err: any)=>{
        this.errors = err.error.errors;
        this.isLoading = false;
        console.log(err.error.errors,"errors" )
      }
    })
  }
}
