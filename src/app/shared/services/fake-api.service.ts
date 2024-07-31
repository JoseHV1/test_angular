import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsInterface } from '@shared/interfaces/products.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  urlApi: string = 'https://fakestoreapi.com/';

  constructor(private _http: HttpClient){}

  getProducts(limit: number = 10): Observable<ProductsInterface[]>{
    return this._http.get<ProductsInterface[]>(`${this.urlApi}products?limit=${limit}`);
  }

  getProductsCategory(category: string): Observable<ProductsInterface[]>{
    return this._http.get<ProductsInterface[]>(`${this.urlApi}products/category/${category}`);
  }
}
