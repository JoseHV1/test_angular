import { Component, OnDestroy } from '@angular/core';
import { ProductsInterface } from '@shared/interfaces/products.interface';
import { FakeApiService } from '@shared/services/fake-api.service';
import { Subject, takeUntil } from 'rxjs';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy {
  destroy$: Subject<void> = new Subject();
  data!: ProductsInterface[];
  displayedColumns: string[] = ['position', 'name', 'category', 'price', 'symbol'];

  constructor(private _api: FakeApiService, private _filter: FiltersService){
    this._filter.filterLimit$.pipe(takeUntil(this.destroy$)).subscribe((limit: number) => {
      if(limit != 10) this.searchProducts(limit);
    });

    this._filter.filterCategory$.pipe(takeUntil(this.destroy$)).subscribe((category: string) => {
      if(category !== 'all'){
        this._api.getProductsCategory(category).subscribe((resp: ProductsInterface[]) => {
          this.data = resp;
        });
      }else{
        this.searchProducts();
      }
    });
  }

  searchProducts(limit?: number): void{
    this._api.getProducts(limit).subscribe((resp: ProductsInterface[]) => {
      this.data = resp;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
