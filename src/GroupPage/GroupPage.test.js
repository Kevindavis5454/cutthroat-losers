import React from 'react';
import ReactDOM from 'react-dom';
import GroupPage from "./GroupPage"
import GroupPageHome from "./GroupPageHome"

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GroupPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GroupPageHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });