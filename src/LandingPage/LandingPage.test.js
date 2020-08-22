import React from 'react';
import ReactDOM from 'react-dom';
import About from "./About"
import HowToUse from "./HowToUse"
import LandingPage from "./LandingPage"
import Rules from "./Rules"
import {BrowserRouter} from "react-router-dom"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HowToUse />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Rules />, div);
    ReactDOM.unmountComponentAtNode(div);
  });