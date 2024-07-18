import * as ReposAction from './repo.action';

export interface RepoState {
    repos: any[];
};

export function repoReducer(state: any[] = [], action: ReposAction.AddRepos): any {
    switch (action.type) {
        default:
            return state;
        case ReposAction.ADD_REPOS:
            return action.data
    }
}