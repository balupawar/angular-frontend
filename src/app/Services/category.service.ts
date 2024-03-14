import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  // getCategories(){
  //   return this.httpClient.get(`http://localhost:4000/api/v1/category`);
  // }
  saveCategory(inputData: object) {
    return this.httpClient.post(`http://localhost:4000/api/v1/category`, inputData);
  }
  updateCategory(inputData: object, category_id: number){
    return this.httpClient.put(`http://localhost:4000/api/v1/category/${category_id}`, inputData)
  }
  getCategory(category_id: number){
    return this.httpClient.get(`http://localhost:4000/api/v1/category/${category_id}`);
  }
  removeCategory(category_id: number){
    return this.httpClient.delete(`http://localhost:4000/api/v1/category/${category_id}`);
  }

  private apiUrl2 = 'http://localhost:4000/api/v1/';

  async getCategoryByLimit(
    page: number = 1,
    pageSize: number = 10
  ): Promise<{ category: Category[]; total: number }> {
    const data = await fetch( 
    `${this.apiUrl2}category?page=${page}&pageSize=${pageSize}`
    );
    const response = await data.json();
    console.log(response);
    return response;
  }
}

export interface CategoryResponse {
  "category_id": number
  "category_name": string,
}
