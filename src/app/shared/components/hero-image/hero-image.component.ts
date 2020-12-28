import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/core/services/shared-data/shared-data.service';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss'],
})
export class HeroImageComponent implements OnInit {
  article: any;
  constructor(private sahredDataService: SharedDataService) {}

  ngOnInit(): void {
    // Get shared artilce data value
    this.sahredDataService.currentArticleData.subscribe(
      (article) => (this.article = article)
    );
  }
}
