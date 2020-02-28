import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
//npm install styled-components@^5.0.0 react@^16.8 react-dom@^16.8 react-is@^16.8
//스타일을위한것
//npm install apollo-boost @apollo/react-hooks graphql
//그래프QL사용을 위한것

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
