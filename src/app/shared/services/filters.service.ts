import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private filterCategorySubject: BehaviorSubject<string>;
  private filterLimitSubject: BehaviorSubject<number>;
  public readonly filterCategory$: Observable<string>;
  public readonly filterLimit$: Observable<number>;

  constructor() {
    this.filterCategorySubject = new BehaviorSubject<string>('all');
    this.filterCategory$ = this.filterCategorySubject.asObservable();

    this.filterLimitSubject = new BehaviorSubject<number>(10);
    this.filterLimit$ = this.filterLimitSubject.asObservable();
  }

  currentFilterCategory(value: string){
    this.filterCategorySubject.next(value);
  }

  currentFilterLimit(value: number){
    this.filterLimitSubject.next(value);
  }
}
