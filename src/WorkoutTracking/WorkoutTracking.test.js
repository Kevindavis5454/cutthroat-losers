import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutTracking from "./WorkoutTracking"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WorkoutTracking />, div);
    ReactDOM.unmountComponentAtNode(div);
  });