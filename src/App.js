import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyled';
// Components
import Header from './components/Header';
import Home from './containers/Home';
import Guide from './containers/Guide';
import Model from './containers/Model';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/guide" component={Guide} />
        <Route path="/model" component={Model} />
      </Switch>
    </div>
  );
}

export default App;
