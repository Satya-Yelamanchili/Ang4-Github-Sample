import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { appRouting } from './app.router';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { ProfilesearchService } from '../app/services/profilesearch.service';
import { RepoComponent } from './profile/repo/repo.component';
import { PublicGitComponent } from './profile/public-git/public-git.component';
import { FollowerComponent } from './profile/follower/follower.component';
import { FollowingComponent } from './profile/following/following.component';
import { ReplaceTextPipe } from './pipe/replace-text.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    ProfileSearchComponent,
    RepoComponent,
    PublicGitComponent,
    FollowerComponent,
    FollowingComponent,
    ReplaceTextPipe
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpModule
  ],
  providers: [ProfilesearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
