import React from 'react';
import ReactDOM from 'react-dom';
import GroupPoints from "./GroupPoints"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GroupPoints />, div);
    ReactDOM.unmountComponentAtNode(div);
  });