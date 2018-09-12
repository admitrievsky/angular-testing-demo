export interface Owner {
  avatar_url: string;
  login: string;
}

export interface Project {
  id: number;
  forks_count: number;
  stargazers_count: number;
  score: number;
  watchers_count: number;
  full_name: string;
  description: string;
  owner: Owner;
}

export interface SearchResults {
  incomplete_results: boolean;
  total_count: number;
  items: Project[];
};
