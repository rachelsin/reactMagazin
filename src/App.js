import { useState, useEffect } from 'react';
import './App.css'
import store from "./redux/store/store";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./componnets/navbar/nav";
import signup from './componnets/signup/signup';
import Login from './componnets/login/login'
import Logout from './componnets/login/logout'
import CarouselPosts from "./componnets/magazin/carouselPosts";
import Home from './componnets/home/home';
import userService from './redux/middleware/userCrud'
import CreatePost from "./componnets/createPost/createPost"
// create
function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    let user = userService.getCurrentUser();
    setUser(user)
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <header>
          <MyNavbar user={user} />
        </header>
        <main>
          <Switch>
            <Route path="/carousel" component={CarouselPosts} />
            <Route path="/signup" component={signup} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            <Route path="/createPost" component={CreatePost}></Route>
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
