import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { LOAD_POST, loadPostSuccess, loadPostError, CHANGE_ARTICLE, changeArticleSuccess, changeArticleError, DELETE_ARTICLE, deleteArticleSuccess, deletArticleError } from "./actions";
import { changeLocation } from "../../common/helpers";

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

const changeArticleEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(CHANGE_ARTICLE),
    switchMap(({article, id}) => {
      return from(deps.articleDataProvider.changeArticle(article, id)).pipe(
        switchMap((data) => {
          return of(changeArticleSuccess(data), changeLocation('/profile', false));
        }),
        catchError(e => {
          return of(changeArticleError(e));
        })
      )
    })
  )
}

const deleteArticleEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(DELETE_ARTICLE),
    switchMap(({id}) => {
      return from(deps.articleDataProvider.deleteArticle(id)).pipe(
        switchMap(() => {
          return of(deleteArticleSuccess(), changeLocation('/profile', false));
        }),
        catchError(e => {
          return of(deletArticleError(e));
        })
      )
    })
  )
}

export const articleEpics = combineEpics(articleEpic, changeArticleEpic, deleteArticleEpic);
