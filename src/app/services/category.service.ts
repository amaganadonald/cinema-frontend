import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';
import { BASE_URL } from '../tokens/app.tokens';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseURL = inject(BASE_URL);
  constructor(private http: HttpClient) { }

  getCategory(): Observable<ICategory> {
    return this.http.get<ICategory>(this.baseURL+'category');
  }
}
