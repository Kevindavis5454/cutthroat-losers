import React from 'react';
import ReactDOM from 'react-dom';
import GroupGraph from "./GroupGraph"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GroupGraph />, div);
    ReactDOM.unmountComponentAtNode(div);
  });