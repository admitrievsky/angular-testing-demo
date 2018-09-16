import { Project, SearchResults } from "../../app/models/github-responses";

export const project: Project = {
  id: 123,
  forks_count: 0,
  stargazers_count: 0,
  score: 0,
  watchers_count: 0,
  full_name: 'full name',
  description: 'description',
  owner: {avatar_url: 'url', login: 'login'}
};

export const anotherProject: Project = {
  id: 124,
  forks_count: 0,
  stargazers_count: 0,
  score: 0,
  watchers_count: 0,
  full_name: 'full name',
  description: 'description',
  owner: {avatar_url: 'url', login: 'login'}
};

export const searchResults: SearchResults = {
  incomplete_results: false,
  total_count: 2,
  items: [
    project,
    anotherProject
  ]
};
