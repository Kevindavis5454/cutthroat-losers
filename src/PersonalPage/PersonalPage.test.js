import React from 'react';
import ReactDOM from 'react-dom';
import PersonalPage from "./PersonalPage"
import PersonalPageHome from "./PersonalPageHome"
import {BrowserRouter} from "react-router-dom"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><PersonalPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><PersonalPageHome /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });