import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TvComponent } from './components/tv/tv.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { LaptopComponent } from './components/laptop/laptop.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Route | Home Page' },
  { path: 'about', component: AboutComponent, title: 'Route | About Page' },
  { path: 'contact', component: ContactComponent, title: 'Route | Contact Page' },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Route | gallery Page',
    children: [
      { path: 'tv', component: TvComponent, title: 'Route | gallery Page | TV' },
      { path: 'mobile', component: MobileComponent, title: 'Route | gallery Page | Mobile' },
      { path: 'laptop', component: LaptopComponent, title: 'Route | gallery Page | laptop' },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'Route | Page Not Fount' },
];
