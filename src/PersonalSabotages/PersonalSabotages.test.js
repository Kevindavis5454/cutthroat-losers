import React from 'react';
import ReactDOM from 'react-dom';
import PersonalSabotages from "./PersonalSabotages"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PersonalSabotages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });