import { Injectable } from '@angular/core';
import { BaseService } from '../../services/base/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleDataService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }
  // Get article data service
  getArticleData() {
    return this.http
      .get<any>(this.baseURL + 'article/show?id=229&type=experience')
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  // Error handler
  handleError(error) {
    let errorMessage = 'An error occured';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
