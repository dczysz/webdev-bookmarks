import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import sites from './data/data';
import Nav from './components/Nav';
import Content from './components/Content';

const pageNames = Object.keys(sites);

const App = () => {
  return (
    <Router>
      <Nav pages={pageNames} />

      <Route
        exact
        path={'/'}
        render={() => <Content name="Web Dev Bookmarks" />}
      />

      {pageNames.map(name => (
        <Route
          key={name}
          path={'/' + name.toLowerCase()}
          render={() => <Content name={name} sites={sites[name]} />}
        />
      ))}
    </Router>
  );
};

export default App;
