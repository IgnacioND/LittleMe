import React from 'react';
import { Provider } from 'react-redux';
import Route from './src/redux/routes/routes';
import store from './src/redux/stores/index';

const App = () => (
  <Provider store={store()}>
    <Route />
  </Provider>
); export default App;
