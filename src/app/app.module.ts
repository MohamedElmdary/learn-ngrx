import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { AppRouterModule } from "./app-router.module";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { PostReducers, PostEffects } from "@store/post";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    StoreModule.forRoot({ post: PostReducers }),
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
