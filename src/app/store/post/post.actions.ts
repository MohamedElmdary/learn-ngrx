import { Action } from "@ngrx/store";
import { Post } from "./post.types";

export const enum PostActions {
  LOAD_POSTS = "LOAD_POSTS",
  ON_LOAD_POSTS = "ON_LOAD_POSTS"
}

export class LoadPosts implements Action {
  public readonly type = PostActions.LOAD_POSTS;
}

export class OnLoadPosts implements Action {
  public readonly type = PostActions.ON_LOAD_POSTS;
  public constructor(public readonly payload: Post[]) {}
}

export type PostTypes = LoadPosts | OnLoadPosts;
