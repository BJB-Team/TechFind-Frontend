/**
 * @jest-environment jsdom
 */

// import renderer from 'react-test-renderer';
import React from 'react';
import ReactDom from 'react-dom';
import { App } from './app';
// import { isTSAnyKeyword } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App/>, div)
})