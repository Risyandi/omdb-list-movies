import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from './routes';
import PageNotFound from './common/component/pageNotFound';
import './assets/css/App.css';

const loading = () => (
  <div className="loading"> 
    <div>Loading...</div>
  </div> 
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading()}>
        <Switch>
          {
            routes.map((route, index) => (
              route.component ? (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                />
              ) : (null)
            ))
          }
          <Route component={PageNotFound}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
