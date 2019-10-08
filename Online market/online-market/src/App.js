import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import MainPageContainer from "../src/client/pages/MainPage/containers/MainPageContainer";
import AuthPageContainer from "../src/client/pages/AuthPage/containers/AuthPageContainer";
import RegisterPageContainer from "../src/client/pages/RegisterPage/containers/RegisterPageContainer";
import AdminPageContainer from "../src/client/pages/AdminPage/containers/AdminPageContainer";
import BlockPage from "../src/client/pages/BlockPage/BlockPage";
import store from "./client/store/store";

function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Route exact path="/" component={MainPageContainer} />
          <Route exact path="/authorization" component={AuthPageContainer} />
          <Route exact path="/registration" component={RegisterPageContainer} />
          <Route exact path="/admin" component={AdminPageContainer} />
          <Route exact path="/blockpage" component={BlockPage} />
        </Provider>
      </div>
    </Router>
  );
}

export default App;
