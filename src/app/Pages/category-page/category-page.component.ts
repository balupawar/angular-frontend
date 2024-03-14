import { Component, OnInit } from '@angular/core';
import { CategoryResponse, CategoryService } from '../../Services/category.service';
import { Category } from '../../Services/Category';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent implements OnInit {
  // category!: CategoryResponse[];
  category: Category[] = [];
  error: any;
  currentPage: number = 1;
  totalPages: number = 0;
  // totalCategories: number = 0;
  limit: number = 10;

  constructor(private categoryService: CategoryService){}
  ngOnInit() {

    this.getCategories();
  }

  // getCategories(){
  //   this.categoryService.getCategories().subscribe((res: any)=>{
  //     console.log(res)
  //     this.category = res
  //   });
  // }

  async getCategories(){
    try{
        const {category, total} = await this.categoryService.getCategoryByLimit(
          this.currentPage,
          this.limit
        );
        const startIndex = (this.currentPage-1) * this.limit
        const endIndex = this.currentPage * this.limit
        this.category = category.slice(startIndex,endIndex);
        // this.totalCategories = total;
        this.totalPages = Math.ceil(total / this.limit);
        console.log(category);

    }catch(error){
      this.error = error;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getCategories();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCategories();
    }
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
