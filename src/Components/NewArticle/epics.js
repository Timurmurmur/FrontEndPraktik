import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { ADD_ARTICLE, addArticleSuccess, addArticleError } from "./actions";
import { changeLocation } from "../../common/helpers";

const newArticleEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(ADD_ARTICLE),
    switchMap(({article}) => {
      return from(deps.articleDataProvider.addArticle(article)).pipe(
        switchMap(() => {
          return of(addArticleSuccess());
        }),
        catchError(e => {
          return of((addArticleError(e), changeLocation('/profile', false)));
        })
      );
    })
  );
};

export const newArticleEpics = combineEpics(newArticleEpic);
