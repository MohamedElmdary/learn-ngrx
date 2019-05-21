import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Post, LoadPosts, postSelector } from "@store/post";
import { Subscription } from "rxjs";
import { AppState } from "@store/app.store";

@Component({
  selector: "app-post-wrapper",
  templateUrl: "./post-wrapper.component.html",
  styleUrls: ["./post-wrapper.component.scss"]
})
export class PostWrapperComponent implements OnInit {
  posts$: Subscription;
  posts: Post[];
  constructor(private readonly store: Store<AppState>) {
    this.posts$ = this.store.pipe(select(postSelector)).subscribe(posts => {
      console.log(posts);

      this.posts = posts;
    });
  }

  public ngOnInit(): void {
    this.store.dispatch(new LoadPosts());
  }

  public ngOnDestroy(): void {
    this.posts$.unsubscribe();
  }
}
