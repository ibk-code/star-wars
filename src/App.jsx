// immport external dependencies
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './sass/main.scss';
import { Provider } from 'react-redux';

import store from './context/store';

const Home = lazy(() => import('./screens/home'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Provider store={store}>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Provider>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
