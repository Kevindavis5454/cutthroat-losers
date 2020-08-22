import React from 'react';
import ReactDOM from 'react-dom';
import Measurements from "./Measurements"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Measurements />, div);
    ReactDOM.unmountComponentAtNode(div);
  });