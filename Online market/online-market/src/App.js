import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPageContainer from './client/pages/MainPage/containers/MainPageContainer';
import AuthPageContainer from './client/pages/AuthPage/containers/AuthPageContainer';
import RegisterPageContainer from './client/pages/RegisterPage/containers/RegisterPageContainer';
import AdminPageContainer from './client/pages/AdminPage/containers/AdminPageContainer';
import BlockPage from './client/pages/BlockPage/BlockPage';
import store from './client/store/store';

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
