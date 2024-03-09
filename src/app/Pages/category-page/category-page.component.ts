import { Component } from '@angular/core';
import { CategoryResponse, CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  category!: CategoryResponse[];

  constructor(private categoryService: CategoryService){}
  ngOnInit() {

    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((res: any)=>{
      console.log(res)
      this.category = res
    });
  }
  deleteCategory(event:any, category_id: number){
    if(confirm('Are you sure delete this category?')){
      event.target.innerText = "Deleting...";
      this.categoryService.removeCategory(category_id).subscribe((res:any)=>{
        this.getCategories();
        console.log(res);
        if(res.affectedRows >= 1){
          alert("Category successfully deleted..")
        }
      })
    }
  }
}
