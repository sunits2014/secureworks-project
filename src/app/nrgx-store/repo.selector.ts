import { createSelector } from '@ngrx/store';
import { RepoState } from './repo.reducer';

export const selectTasks = (state: RepoState) => state.repos;

export const selectRepoById = (id: any) =>
    createSelector(selectTasks, repos => repos.find(repo => repo.id === id));