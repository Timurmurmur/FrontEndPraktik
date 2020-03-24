import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { changeLocation } from "../../common/helpers";
import { REG, regSuccess, regError } from "./actions";

const regEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(REG),
    switchMap(({ }) => {
      return from(deps.regDataProvider.reg()).pipe(
        switchMap(() => {
          return of(regSuccess(), changeLocation('/', false));
        }),
        catchError(e => {
          return of(regError(e.response.data.Error));
        })
      );
    })
  );
};

export const regEpics = combineEpics(regEpic);
