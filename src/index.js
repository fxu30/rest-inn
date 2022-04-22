import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'


import 'foundation-sites/dist/css/foundation.css';
import './assets/css/App.css'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
