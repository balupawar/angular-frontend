import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private httpClient: HttpClient) { }
  getProducts(){
    return this.httpClient.get(`http://localhost:4000/api/v1/products`);
  }
  getProductsDetails(){
    return this.httpClient.get(`http://localhost:4000/api/v1/productList`);
  }

  getProduct(product_id: number){
    return this.httpClient.get(`http://localhost:4000/api/v1/products/${product_id}`);
  }

  saveProduct(inputData: object) {
    return this.httpClient.post(`http://localhost:4000/api/v1/products`, inputData);
  }
  updateProduct(inputData: object,product_id: number){
    return this.httpClient.put(`http://localhost:4000/api/v1/products/${product_id}`, inputData)
  }

  removeProduct(product_id: number){
    return this.httpClient.delete(`http://localhost:4000/api/v1/products/${product_id}`);
  }
  
}

export interface ProductResponse {
  "product_id": number,
  "product_name": string,
  "product_price": number,
  "category_id": number
}

export interface ProductDetailsResponse {
  "category_id": number,
  "product_id": number,
  "product_name": string,
  "product_price": number,
  "category_name":string
}
