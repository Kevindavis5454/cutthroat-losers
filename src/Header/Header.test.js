import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header"
import HeaderLogin from "./HeaderLogin"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderLogin />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });