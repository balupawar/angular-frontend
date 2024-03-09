import { Component } from '@angular/core';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {
  category_name!: string;
  constructor(private categoryService: CategoryService){}

  saveCategory(){
    var inputData = {
      category_name: this.category_name
    }
    this.categoryService.saveCategory(inputData).subscribe((res: any) =>{
      // console.log(res);
      if(res.affectedRows === 1){
        alert('category successfully created')
      }
    })
  }
}
