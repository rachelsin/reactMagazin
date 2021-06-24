import { creatMagazin } from "../middleware/magazinCrud";
import{createStore,applyMiddleware,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import public_reducer from '../reducers/public_reducer'

const reducer=combineReducers({public_reducer})
const store=createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            creatMagazin
        )
    )
)

export default store;