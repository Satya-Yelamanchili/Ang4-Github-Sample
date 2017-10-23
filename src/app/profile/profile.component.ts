import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfilesearchService } from '../services/profilesearch.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor( private searchService: ProfilesearchService) { }
  userName: string;
  userDetails: any;
  userRepos: any;
  repourl: string;
  gitUrl: string;
  followersUrl: string;
  followingUrl: string;
  ngOnInit() {
    this.userName = 'dav';
    this.onLoadService();
  }

  onLoadService() {
    this.searchService.onProfileSearch(this.userName).subscribe(res => {
      this.userDetails = res;
      this.repourl = res.repos_url;
      this.gitUrl = res.gists_url;
      this.followersUrl = res.followers_url;
      this.followingUrl = res.following_url;
    });
  }
}
