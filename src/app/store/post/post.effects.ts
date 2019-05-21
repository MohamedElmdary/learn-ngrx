import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { PostService } from "./post.service";
import { PostActions, OnLoadPosts, LoadPosts } from "./post.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Post } from "./post.types";
import { throwError } from "rxjs";

@Injectable()
export class PostEffects {
  public constructor(
    private readonly actions$: Actions,
    private readonly postService: PostService
  ) {}

  @Effect()
  public loadPosts$ = this.actions$.pipe(
    ofType(PostActions.LOAD_POSTS),
    mergeMap(() => {
      const localPosts: string = localStorage.getItem("posts");
      if (localPosts) {
        return new Promise<OnLoadPosts>(res => {
          res(new OnLoadPosts(JSON.parse(localPosts)));
        });
      }
      return this.postService.loadPosts().pipe(
        map(posts => {
          localStorage.setItem("posts", JSON.stringify(posts));
          return new OnLoadPosts(posts);
        })
      );
    }),
    catchError(err => {
      window.alert("Something went wrong while fetching posts");
      return throwError(err);
    })
  );
}
