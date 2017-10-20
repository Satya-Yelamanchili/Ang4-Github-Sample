import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilesearchService } from '../../services/profilesearch.service';

@Component({
  selector: 'app-public-git',
  templateUrl: './public-git.component.html',
  styleUrls: ['./public-git.component.css']
})
export class PublicGitComponent implements OnInit {
  repoList: any[];
  url: string;
  constructor(private route: ActivatedRoute,  private searchService: ProfilesearchService) { }

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
