import React from 'react';
import './App.css';
import Left from './left/Left';
import Center from './center/Center';
import Right from './right/Right';

import { Provider } from 'react-redux';
import { store } from './redux/store';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className={'App'}>
          <Left />
          <Center />
          <Right />
        </div>
      </Provider>
    )
  }
}
