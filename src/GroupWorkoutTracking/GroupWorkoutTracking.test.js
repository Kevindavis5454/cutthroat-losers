import React from 'react';
import ReactDOM from 'react-dom';
import GroupWorkoutTracking from "./GroupWorkoutTracking"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GroupWorkoutTracking />, div);
    ReactDOM.unmountComponentAtNode(div);
  });