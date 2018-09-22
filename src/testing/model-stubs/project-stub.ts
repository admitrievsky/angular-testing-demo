import { Project, SearchResults } from "../../app/models/github-responses";

const catImage = 'data:image/gif;base64,R0lGODlhCgAMAPUAAAAAAN52LNuHKNaOLN6JKd2MKcuXMsqWM+iKLeqMLeeSKuKXLumTKeiTKumUKuqVKuqVK+uWK+iVLOqVLOuVLeiVL+2YK++ZKu6ZK++ZK+iZLOuYL/GbK/OcKfSdKfCcLPGcLPOdLPSeLOmWMPOfMPSeMe6lS+mjTvCjQvGmRuOnZfW3ZPi7auu4fvS9d+Gzhe/BiuvAkePFrfHRrujQvfDUtvrbtO/czO7czffjzffw6gAAAAAAAAAAAAAAAAAAACH5BAEAAAAALAAAAAAKAAwAAAZVQIBwKKwJA5QPQrgZDg4LAwHQGBYkCY1AqBiiSqGH0DHMsTwhi7AK0NlIIlEGQAbEcqkLJh0RVlomDCBxEEIjABMNHR4cQzMvMCouKydDNDI4ADdDQQA7';

export const project: Project = {
  id: 123,
  forks_count: 0,
  stargazers_count: 0,
  score: 0,
  watchers_count: 0,
  full_name: 'full name',
  description: 'description',
  owner: {avatar_url: catImage, login: 'login'}
};

export const anotherProject: Project = {
  id: 124,
  forks_count: 0,
  stargazers_count: 0,
  score: 0,
  watchers_count: 0,
  full_name: 'Another full name',
  description: 'Another description',
  owner: {avatar_url: catImage, login: 'login'}
};

export const searchResults: SearchResults = {
  incomplete_results: false,
  total_count: 2,
  items: [
    project,
    anotherProject
  ]
};
