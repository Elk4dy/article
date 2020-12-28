import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/interfaces/article.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  // Article data source
  private articleDataSource = new BehaviorSubject({});
  // Current article data value
  currentArticleData = this.articleDataSource.asObservable();

  constructor() {}
  // Function that we can change current article data value in the whole app
  changeArticleData(articleData: Article) {
    this.articleDataSource.next(articleData);
  }
}
