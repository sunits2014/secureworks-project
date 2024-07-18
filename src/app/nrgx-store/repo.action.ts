import { Repo } from "./repo.model";
import { Action } from '@ngrx/store';

export const ADD_REPOS = '[REPOS] Add';
export class AddRepos implements Action {
    readonly type = ADD_REPOS;
  
    constructor(public data: Repo) {}
  }

export type ReposAction = AddRepos;