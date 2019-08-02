import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import sites from './data/data';
import TopNav from './components/Nav/TopNav';
import Content from './components/Content';

const pageNames = Object.keys(sites);

const App = () => {
  return (
    <Router>
      <TopNav pages={pageNames} />

      <Route
        exact
        path={'/'}
        render={() => <Content name="Web Dev Bookmarks" pages={pageNames} />}
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
