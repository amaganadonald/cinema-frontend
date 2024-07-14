import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { ITown } from '../interfaces/ITown';
import { Observable, tap } from 'rxjs';
import { BASE_URL } from '../tokens/app.tokens';
import { IResponse } from '../interfaces/IResponse';

@Injectable({
  providedIn: 'root'
})
export class TownService {

  private http=inject(HttpClient)
  towns=signal<ITown[]>([]);
  baseUrl = inject(BASE_URL);

  getTowns():Observable<IResponse> {
    return this.http.get<IResponse>(this.baseUrl+"town").pipe(
      tap(town=>this.towns.set(town.results))
    );
  }
}
