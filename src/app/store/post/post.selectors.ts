import { createSelector } from "@ngrx/store";
import { AppState } from "@store/app.store";
import { PostState } from "./post.types";

export const postSelector = createSelector(
  (state: AppState): PostState => state.post,
  (state: PostState) => state.posts
);
