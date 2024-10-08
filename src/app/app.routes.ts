import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';

export const routes: Routes = [  // Export the routes array
    { path: 'home', component: HomeComponent, 
      children: [
        { path: 'library', component: LibraryComponent },
      ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }