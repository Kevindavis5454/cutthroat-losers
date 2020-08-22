import React from 'react';
import ReactDOM from 'react-dom';
import GroupPage from "./GroupPage"
import GroupPageHome from "./GroupPageHome"
import {BrowserRouter} from "react-router-dom"

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><GroupPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><GroupPageHome /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });