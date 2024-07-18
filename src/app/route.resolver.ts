import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { RepoState } from './nrgx-store/repo.reducer';
import { GraphQLService } from './graphql/graphql.service';
import { of } from 'rxjs';
import * as ReposAction from './nrgx-store/repo.action';

export const routeResolver: ResolveFn<any> = (route, state) => {

  const graphqlService = inject(GraphQLService);
  const store = inject(Store<RepoState>);
  store.select('repos').subscribe(repos => {
    if (repos.length === 0) {
      return graphqlService.getRepos().pipe().subscribe(data => {
        store.dispatch(new ReposAction.AddRepos(data.repositoryOwner.repositories.nodes));
        return of(data.repositoryOwner.repositories.nodes)
      })
    } else {
      return of(repos)
    }
  })
};
