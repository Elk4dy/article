import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { HeroContentComponent } from './components/hero-content/hero-content.component';

@NgModule({
  declarations: [HeaderComponent, HeroImageComponent, HeroContentComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, HeroImageComponent, HeroContentComponent],
})
export class SharedModule {}
