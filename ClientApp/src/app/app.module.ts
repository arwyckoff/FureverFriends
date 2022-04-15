import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DogCreateEditPageComponent } from './dog-crud/dog-create-edit-page/dogs-create-edit-page.component';
import { DogsPageComponent } from './dog-crud/dogs-page/dogs-page.component';
import { DogsTableComponent } from './dog-crud/dogs-table/dogs-table.component';
import { FindFriendsPageComponent } from './find-friends/find-friends-page/find-friends-page.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FriendsPageComponent } from './find-friends/friends-page/friends-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FindFriendsPageComponent,
    DogsTableComponent,
    DogsPageComponent,
    DogCreateEditPageComponent,
    FriendsPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'find-friends', component: FindFriendsPageComponent },
      { path: 'dogs', component: DogsPageComponent, pathMatch: 'full' },
      { path: 'dogs/:id', component: DogCreateEditPageComponent, pathMatch: 'full'},
      { path: 'friends/:id', component: FriendsPageComponent, pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
