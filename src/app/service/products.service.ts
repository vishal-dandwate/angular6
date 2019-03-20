import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { 
    console.log()
  }
  getProducts():any {
    return this._http.get('http://localhost:3000/ProductCollection')
  }
}
