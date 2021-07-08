import Login from "./componnets/login/login";
import store from "./redux/store/store";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "./componnets/createUser/createUser";
import Navbar from "./componnets/navbar/navbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={CreateUser} />
          </Switch>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
