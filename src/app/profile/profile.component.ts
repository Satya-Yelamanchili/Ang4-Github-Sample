import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfilesearchService } from '../serices/profilesearch.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor( private searchService: ProfilesearchService) { }
  userDetails: any;
  userRepos: any;
  repourl: string;
  gitUrl: string;
  followersUrl: string;
  followingUrl: string;
  ngOnInit() {
    this.onLoadService();
  }

  onLoadService() {
    this.searchService.onProfileSearch().subscribe(res => {
      this.userDetails = res;
      console.log(res);
      this.repourl = res.repos_url;
      this.gitUrl = res.gists_url;
      this.followersUrl = res.followers_url;
      this.followingUrl = res.following_url;
    });
  }
}
