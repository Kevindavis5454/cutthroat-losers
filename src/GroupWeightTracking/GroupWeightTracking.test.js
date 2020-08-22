import React from 'react';
import ReactDOM from 'react-dom';
import GroupWeightTracking from "./GroupWeightTracking"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GroupWeightTracking />, div);
    ReactDOM.unmountComponentAtNode(div);
  });