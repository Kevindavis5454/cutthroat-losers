import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header"
import HeaderLogin from "./HeaderLogin"
import {BrowserRouter} from "react-router-dom"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><HeaderLogin /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });