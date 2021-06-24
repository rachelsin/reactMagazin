import Login from "./componnets/login/login";
import store from "./redux/store/store";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "./componnets/createUser/createUser";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={CreateUser} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
