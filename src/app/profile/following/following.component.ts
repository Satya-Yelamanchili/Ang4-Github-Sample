import { Component, OnInit } from '@angular/core';
import { ProfilesearchService } from '../../services/profilesearch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  repoList: any[];
  url: string;
  constructor( private searchService: ProfilesearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.url = param['url'];
     });
    // this.getRepos();
  }
  getRepos() {
    this.searchService.getDataFromURL(this.url).subscribe(repos => {
      this.repoList = repos;
    });
  }
}
