import { GithubUser } from "src/app/types";

export interface AppState {
  github: GithubState; // Include other state slices if needed
}

export interface GithubState {
  users: GithubUser[];
  loading: boolean;
  error: any;
}
