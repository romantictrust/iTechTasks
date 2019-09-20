import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import MainPageContainer from "../src/client/pages/MainPage/containers/MainPageContainer";
import AuthPageContainer from "../src/client/pages/AuthPage/containers/AuthPageContainer";
import UsersListPage from "../src/client/pages/UsersListPage/UsersListPage";
import RegisterPage from '../src/client/pages/RegisterPage/RegisterPage';
import store from './client/store/store';


function App() {
  return (
    <Router>
      <div>
      <Provider store={store}>
        <Route exact path="/" component={MainPageContainer} />
        <Route exact path="/authorization" component={AuthPageContainer} />
        <Route exact path="/users" component={UsersListPage} />
        <Route exact path="/registration" component={RegisterPage} />
        </Provider>
      </div>
    </Router>
  );
}

export default App;
