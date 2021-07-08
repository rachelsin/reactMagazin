import { actions } from "../actions/action";

export const createUser = ({ dispatch, getState }) => next => action => {
        if (action.type === 'CREATE_USER') {
            alert("creat USER");
            console.log(action.payload);

        }
        return next(action);
}
