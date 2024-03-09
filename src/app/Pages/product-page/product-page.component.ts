import { Component } from '@angular/core';
import { ProductService, ProductResponse } from '../../Services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  constructor(private productService: ProductService) { }
  products!: ProductResponse[];

  ngOnInit() {

    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe((res: any)=>{
      console.log(res)
      this.products = res
    });
  }
  deleteProduct(event:any, product_id: number){
      if(confirm('Are your sure you want to delete this data?')){
          event.target.innerText = "Deleting..";
          this.productService.removeProduct(product_id).subscribe((res:any)=>{
            this.getProducts();
            console.log(res);
            if(res.affectedRows >= 1){
              alert("Product deleted successfully");
            }
          })

      }
  }
}
