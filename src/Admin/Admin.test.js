import React from 'react';
import ReactDOM from 'react-dom';
import Admin from "./Admin"
import AdminContestToUser from "./AdminContestToUser"
import AdminPointAssignMeasurement from "./AdminPointAssignMeasurement"
import AdminPointAssignWeight from "./AdminPointAssignWeight"
import {BrowserRouter} from "react-router-dom"

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Admin /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminContestToUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminPointAssignMeasurement />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminPointAssignWeight />, div);
  ReactDOM.unmountComponentAtNode(div);
});
