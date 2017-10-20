import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';

import { RepoComponent } from './profile/repo/repo.component';
import { PublicGitComponent } from './profile/public-git/public-git.component';
import { FollowerComponent } from './profile/follower/follower.component';
import { FollowingComponent } from './profile/following/following.component';

const routerConfig: Routes = [
    {
        path: 'profile', component: ProfileComponent,
        children: [
            {path: 'repos', component: RepoComponent},
            {path: 'gits', component: PublicGitComponent},
            {path: 'following', component: FollowingComponent},
            {path: 'followers', component: FollowerComponent}
        ]
    },
    {
        path: 'search', component: ProfileSearchComponent
    }
];




export const appRouting: ModuleWithProviders = RouterModule.forRoot(routerConfig);
