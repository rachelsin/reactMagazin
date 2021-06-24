import { actions } from "../actions/action";

export const creatMagazin = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CREAT_MAGAZIN') {
        alert("creat magazin")
    }
    return next(action);
}