import React from 'react';
import ReactDOM from 'react-dom';
import GroupMeasurements from "./GroupMeasurements"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GroupMeasurements />, div);
    ReactDOM.unmountComponentAtNode(div);
  });