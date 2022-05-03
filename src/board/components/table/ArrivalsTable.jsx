import { connect } from 'react-redux';
import Table from './Table.jsx';
import { arrivalsFlightListSelector } from '../../board.selectors.js';

const mapState = (state) => ({
  flightList: arrivalsFlightListSelector(state),
});

export default connect(mapState)(Table);
