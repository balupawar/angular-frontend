import { Component } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  category_id!: any;
  category!: any;
  c!: any;

  constructor(private route: ActivatedRoute,private categoryService: CategoryService){}

  ngOnInit(){
    this.category_id = this.route.snapshot.paramMap.get('id');

    this.categoryService.getCategory(this.category_id).subscribe(res => {
      // console.log(res)
      this.c = res;
      this.category = this.c[0];
      console.log(this.category);
    });
  }
  updateCategory(){
    var inputData = {
      category_name: this.category.category_name
    }
    this.categoryService.updateCategory(inputData,this.category_id).subscribe({
      next: (res: any) => {
        console.log(res);
        if(res.affectedRows >= 1){
          alert("successfully update")
        }
      }
    })
  }
}
