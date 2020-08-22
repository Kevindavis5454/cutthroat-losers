import React from 'react';
import ReactDOM from 'react-dom';
import ProgressChart from "./ProgressChart"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProgressChart />, div);
    ReactDOM.unmountComponentAtNode(div);
  });