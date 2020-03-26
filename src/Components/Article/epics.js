import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { LOAD_POST, loadPostSuccess, loadPostError } from "./actions";

const articleEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(LOAD_POST),
    switchMap(({post_id}) => {
      return from(deps.articleDataProvider.loadPost(post_id)).pipe(
        switchMap((data) => {
          return of(loadPostSuccess(data));
        }),
        catchError(e => {
          return of(loadPostError(e));
        })
      );
    })
  );
};

export const articleEpics = combineEpics(articleEpic);
