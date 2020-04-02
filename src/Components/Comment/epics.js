import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { LOAD_COMMENTS, loadCommentsSuccess, loadCommentsError, ADD_COMMENT, addCommentSuccess, addCommentError } from "./actions";

const commentsEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(LOAD_COMMENTS),
    switchMap(({ post_id }) => {
      return from(deps.commentsDataProvider.loadComments(post_id)).pipe(
        switchMap((data) => {
          return of(loadCommentsSuccess(data));
        }),
        catchError(e => {
          return of(loadCommentsError(e));
        })
      );
    })
  );
};

const addCommentEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(ADD_COMMENT),
    switchMap(({ postId, comment }) => {
      return from(deps.commentsDataProvider.addComment(postId, comment)).pipe(
        switchMap(() => {
          return of(addCommentSuccess());
        }),
        catchError(e => {
          return of(addCommentError(e));
        })
      );
    })
  );
};


export const commentEpics = combineEpics(commentsEpic, addCommentEpic);
