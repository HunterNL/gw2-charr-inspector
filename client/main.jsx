import { render } from 'react-dom';
import Meteor from 'meteor/meteor';
import React from 'react';
import Homepage from './home.jsx';

function renderReactIntoDom() {
  const element = document.findElemenyByid('__react-root');
  render(<Homepage />, element);
}

Meteor.startup(renderReactIntoDom);
