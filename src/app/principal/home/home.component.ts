import { Component } from '@angular/core';
import { OPTIONS_CATEGORIES } from '@shared/datasets/categories.dataset';
import { OPTIONS_ROWS } from '@shared/datasets/rows.dataset';
import { AuthService } from '@shared/services/auth.service';
import { FiltersService } from '@shared/services/filters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  category: string = 'all';
  limit: number = 10;
  existSession: boolean = true;
  limitRows: number[] = OPTIONS_ROWS;
  categories: string[] = OPTIONS_CATEGORIES;

  constructor(private _filters: FiltersService, private _auth: AuthService){
    this._auth.auth$.subscribe(resp => {
      if(!resp) this.existSession = false;
    });
  }

  categorySelected(): void {
    this._filters.currentFilterCategory(this.category);
  }

  limitSelected(): void{
    this._filters.currentFilterLimit(this.limit);
  }
}
