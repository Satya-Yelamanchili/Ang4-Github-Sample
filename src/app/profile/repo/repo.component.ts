import { Component, OnInit, Input } from '@angular/core';
import { ProfilesearchService } from '../../services/profilesearch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
 // tslint:disable-next-line:no-input-rename
 repoUrl: string;
 repoList: any[];
  constructor(private searchService: ProfilesearchService, private route: ActivatedRoute) { }

  ngOnInit() {
       this.route.params.subscribe(param => {
        this.repoUrl = param['url'];
       });
    this.getRepos();
  }
  getRepos() {
    this.searchService.getDataFromURL(this.repoUrl).subscribe(repos => {
      this.repoList = repos;
    });
  }

}
