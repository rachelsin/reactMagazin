import Login from "./componnets/login/login";
import store from "./redux/store/store";
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
     <Login/>
    </Provider>
  );
}

export default App;
