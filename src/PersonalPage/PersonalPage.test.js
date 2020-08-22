import React from 'react';
import ReactDOM from 'react-dom';
import PersonalPage from "./PersonalPage"
import PersonalPageHome from "./PersonalPageHome"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PersonalPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PersonalPageHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });