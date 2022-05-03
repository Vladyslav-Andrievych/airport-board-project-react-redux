import { connect } from 'react-redux';
import Table from './Table.jsx';
import { departuresFlightListSelector } from '../../board.selectors.js';

const mapState = (state) => ({
  flightList: departuresFlightListSelector(state),
});

export default connect(mapState)(Table);
