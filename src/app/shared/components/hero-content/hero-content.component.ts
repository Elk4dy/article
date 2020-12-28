import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/core/services/shared-data/shared-data.service';
import { Article } from 'src/app/interfaces/article.model';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.scss'],
})
export class HeroContentComponent implements OnInit {
  article: any;
  constructor(private sahredDataService: SharedDataService) {}

  ngOnInit(): void {
    // Get shared artilce data value
    this.sahredDataService.currentArticleData.subscribe(
      (article) => (this.article = article)
    );
  }
}
