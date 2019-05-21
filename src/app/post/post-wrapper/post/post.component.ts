import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Post } from "@store/post";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "[app-post]",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Input() post: Post;
}
