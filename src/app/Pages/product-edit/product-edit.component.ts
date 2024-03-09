import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  product_id!: any;
  // product: any = { product_id: undefined, product_name: '',product_price: undefined,category_id:undefined};
  product!: any;
  p!: any;
  

  constructor(private route: ActivatedRoute, private productService: ProductService ){}
  ngOnInit(){
    this.product_id = this.route.snapshot.paramMap.get('id');
    // alert(this.product_id);

    this.productService.getProduct(this.product_id).subscribe(res=> {
      // console.log(res)
      this.p = res;
      this.product = this.p[0];
      console.log(this.product)
    });

  }
  updateProduct(){
      var inputData = {
        product_name: this.product.product_name,
        product_price: this.product.product_price,
        category_id: this.product.category_id
      }

      this.productService.updateProduct(inputData,this.product_id).subscribe({
        next: (res: any) =>{
          console.log(res);
          if(res.affectedRows === 1){
            alert("successfully updated")
          }
          // alert(res.message)
        }
      });
  }
}

