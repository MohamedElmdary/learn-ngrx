import { PostTypes, PostActions } from "./post.actions";
import { PostState } from "./post.types";

const initState: PostState = {
  posts: []
};

export function PostReducers(
  state: PostState = initState,
  action: PostTypes
): PostState {
  switch (action.type) {
    case PostActions.ON_LOAD_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}
