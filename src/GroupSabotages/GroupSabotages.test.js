import React from 'react';
import ReactDOM from 'react-dom';
import GroupSabotages from "./GroupSabotages"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GroupSabotages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });