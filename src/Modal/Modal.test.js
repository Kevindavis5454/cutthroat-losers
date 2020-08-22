import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "./Modal"
import {BrowserRouter} from "react-router-dom"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Modal /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });