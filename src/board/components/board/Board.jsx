import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Filters from '../filters/Filters.jsx';
import ArrivalsTable from '../table/ArrivalsTable.jsx';
import DeparturesTable from '../table/DeparturesTable.jsx';
import Info from '../info/Info.jsx';

import './board.scss';

const Board = () => {
  return (
    <section className="board">
      <Filters />
      <Switch>
        <Route exact path="/">
          <Info message="Select a table or type search text please" />
        </Route>
        <Route path="/departures">
          <DeparturesTable />
        </Route>
        <Route path="/arrivals">
          <ArrivalsTable />
        </Route>
      </Switch>
    </section>
  );
};

export default Board;
