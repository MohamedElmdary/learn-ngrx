import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HelloComponent } from "./hello/hello.component";

const appRoutes: Routes = [
  { component: HelloComponent, path: "" },
  { path: "post", loadChildren: "./post/post.module#PostModule" }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
