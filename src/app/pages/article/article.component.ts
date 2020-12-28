import { Component, OnInit } from '@angular/core';
import { ArticleDataService } from 'src/app/core/services/article-data/article-data.service';
import { SharedDataService } from 'src/app/core/services/shared-data/shared-data.service';
import { Article } from 'src/app/interfaces/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article: Article;
  constructor(
    private articleService: ArticleDataService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    // Calling articla get data service
    this.articleService.getArticleData().subscribe((res) => {
      this.article = res.data;
      // Calling shared data service that will share article data in the whole app
      this.sharedDataService.changeArticleData(this.article);
    });
  }
}
