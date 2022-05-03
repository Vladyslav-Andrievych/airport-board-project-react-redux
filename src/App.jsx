import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store.js';

import AirportBoard from './AirportBoard.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AirportBoard />
      </Router>
    </Provider>
  );
};

export default App;
