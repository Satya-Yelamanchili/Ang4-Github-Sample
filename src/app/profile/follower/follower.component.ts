import { Component, OnInit } from '@angular/core';
import { ProfilesearchService } from '../../services/profilesearch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  url: string;
  repoList: any[];
  constructor( private searchService: ProfilesearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.url = param['url'];
     });
    this.getRepos();
  }
  getRepos() {
    this.searchService.getDataFromURL(this.url).subscribe(repos => {
      this.repoList = repos;
    });
  }
}
