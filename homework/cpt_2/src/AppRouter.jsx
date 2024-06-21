import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-dom';
import Todo from './views/유람/component/Todo';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/todo" component={Todo} />
      </Switch>
    </Router>
  );
};

export default AppRouter;