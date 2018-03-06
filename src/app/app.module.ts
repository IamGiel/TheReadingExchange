import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LibraryDetailComponent } from './library/library-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryComponent,
    MyProfileComponent,
    LibraryDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'library', component: LibraryComponent },
        { path: 'my-profile', component: MyProfileComponent},
        { path: 'library-detail', component: LibraryDetailComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
