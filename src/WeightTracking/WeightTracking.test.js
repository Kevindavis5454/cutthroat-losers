import React from 'react';
import ReactDOM from 'react-dom';
import WeightTracking from "./WeightTracking"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeightTracking />, div);
    ReactDOM.unmountComponentAtNode(div);
  });