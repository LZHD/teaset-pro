
import React, {Component} from 'react';

import {TeaNavigator, Theme} from 'teaset-pro';
import TeasetExampleHome from './views/Home';

export default class App extends Component {
  render() {
    return <TeaNavigator rootView={<TeasetExampleHome />} />;
  }
}
