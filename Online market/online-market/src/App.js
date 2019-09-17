import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from '../src/client/pages/MainPage/MainPage';
import AuthPage from '../src/client/pages/AuthPage/AuthPage';
import UsersListPage from '../src/client/pages/UsersListPage/UsersListPage';

function App() {
  return (
    <Router>
      <div>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/authorization" component={AuthPage} />
    <Route exact path="/users" component={UsersListPage} />
    </div>
    </Router>
  );
}

export default App;
