import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostWrapperComponent } from "./post-wrapper/post-wrapper.component";
import { Routes, RouterModule } from "@angular/router";
import { PostComponent } from "./post-wrapper/post/post.component";
import { CutTextPipe } from "./cut-text.pipe";

const postRoutes: Routes = [{ component: PostWrapperComponent, path: "" }];

@NgModule({
  declarations: [PostWrapperComponent, PostComponent, CutTextPipe],
  imports: [CommonModule, RouterModule.forChild(postRoutes)]
})
export class PostModule {}
