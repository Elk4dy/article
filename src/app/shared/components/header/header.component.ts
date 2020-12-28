import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Menu items array
  menuItems: MenuItem[] = [
    {
      title: 'About Us',
      redirectTo: 'about-us',
    },
    {
      title: 'Our Magazine',
      redirectTo: 'our-magazine',
    },
    {
      title: 'Multimedia',
      redirectTo: 'multimedi',
    },
    {
      title: 'Community',
      redirectTo: 'community',
    },
    {
      title: 'Activities',
      redirectTo: 'activities',
    },
    {
      title: 'Contact us',
      redirectTo: 'contact-us',
    },
  ];
  // Show profile options
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showOption() {
    this.show = !this.show;
  }
}
