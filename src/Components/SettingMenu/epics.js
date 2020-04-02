import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { LOAD_USER, loadUserSuccess, loadUserError } from "./actions";


const userEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(LOAD_USER),
    switchMap(({}) => {
      return from(deps.userDataProvider.loadUserData()).pipe(
        switchMap((data) => {
          return of(loadUserSuccess(data));
        }),
        catchError(e => {
          return of(loadUserError(e));
        })
      );
    })
  );
};



export const userEpics = combineEpics(userEpic);
