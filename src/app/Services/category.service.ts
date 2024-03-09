import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  getCategories(){
    return this.httpClient.get(`http://localhost:4000/api/v1/category`);
  }
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
}

export interface CategoryResponse {
  "category_id": number
  "category_name": string,
}
