import { Component, OnInit } from '@angular/core';
import { ProductService, ProductResponse } from '../../Services/product.service';
import { Product } from '../../Services/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  constructor(private productService: ProductService) { }
  //  products!: ProductResponse[];
  products: Product[] = [];
  error: any;
  currentPage: number = 1;
  totalPages: number = 0;
  // totalProducts: number = 0;
  limit: number = 10;

  ngOnInit() {

    this.getProducts();
  }

  // getProducts(){
  //   this.productService.getProducts().subscribe((res: any)=>{
  //     console.log(res)
  //     this.products = res
  //   });
  // }

  async getProducts(){
    try{
      const {products, total} = await this.productService.getProductByLimit(
        this.currentPage,
        this.limit
        );
        const startIndex = (this.currentPage-1)*this.limit
        const endIndex = this.currentPage*this.limit
        this.products = products.slice(startIndex,endIndex);
        // this.totalProducts = total;
        this.totalPages = Math.ceil(total / this.limit);
        console.log()
        console.log(products);
    }catch(error){
      this.error = error;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProducts();
    }
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
