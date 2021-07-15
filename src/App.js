import Login from "./componnets/login/login";
import store from "./redux/store/store";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "./componnets/createUser/createUser";
import Navi from "./componnets/navbar/nav";

import Navbar from "./componnets/navbar/navbar";
import CarouselPosts from "./componnets/magazin/carouselPosts";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <Navi />
        </header>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/carousel" component={CarouselPosts}/>

                
             <Route path="/" component={CreateUser} />  
          </Switch>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
