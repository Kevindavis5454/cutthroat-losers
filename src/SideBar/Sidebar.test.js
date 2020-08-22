import React from 'react';
import ReactDOM from 'react-dom';
import Contestant from "./Contestant"
import ContestantCompletion from "./ContestantCompletion"
import Sidebar from "./Sidebar"
import SidebarHome from "./SidebarHome"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contestant />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContestantCompletion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SidebarHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });