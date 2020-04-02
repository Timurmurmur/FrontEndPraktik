import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { LOAD_USER_POSTS, loadUserPostsSuccess, loadUserPostsError } from "./actions";

const profilePostsEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(LOAD_USER_POSTS),
    switchMap(({}) => {
      return from(deps.profileDataProvider.loadUserPosts()).pipe(
        switchMap((data) => {
          return of(loadUserPostsSuccess(data));
        }),
        catchError(e => {
          return of(loadUserPostsError(e));
        })
      );
    })
  );
};



export const profileEpics = combineEpics(profilePostsEpic);
