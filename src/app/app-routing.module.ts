import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
  // Redirection to article component
  { path: '', pathMatch: 'full', redirectTo: 'article' },
  { path: 'about-us', pathMatch: 'full', redirectTo: 'article' },
  { path: 'our-magazine', pathMatch: 'full', redirectTo: 'article' },
  { path: 'multimedi', pathMatch: 'full', redirectTo: 'article' },
  { path: 'community', pathMatch: 'full', redirectTo: 'article' },
  { path: 'activities', pathMatch: 'full', redirectTo: 'article' },
  { path: 'contact-us', pathMatch: 'full', redirectTo: 'article' },
  { path: 'article', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
