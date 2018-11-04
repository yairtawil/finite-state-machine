import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { IState } from './reducers';
import { Provider } from 'react-redux';
import { fetchBuildings, receiveBuildings } from './actions/building';
import axios, { AxiosResponse } from 'axios';
import { config } from './config/config';
import { BuildingRecord } from './reducers/building';

​const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<IState, any>));
store.dispatch(dispatch => {
  dispatch(fetchBuildings());
  axios.get<BuildingRecord>(config.fetchBuildingsUrl).then((result: AxiosResponse) => {
    dispatch(receiveBuildings(result.data));
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
