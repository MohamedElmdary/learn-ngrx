import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "./post.types";

@Injectable({
  providedIn: "root"
})
export class PostService {
  public constructor(private readonly http: HttpClient) {}

  public loadPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
