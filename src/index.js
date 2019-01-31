import React                                      from 'react';
import ReactDOM                                   from 'react-dom';
import App                                        from './App';
import { BrowserRouter }                          from 'react-router-dom';
import { createStore, applyMiddleware, compose }  from 'redux';
import logger                                     from 'redux-logger';
import thunk                                      from 'redux-thunk';
import { Provider }                               from 'react-redux';
import reducer                                    from './reducers/'
import                                                 './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const devStore = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk,logger)
));
const prodStore = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));
ReactDOM.render(
  <Provider store={process.env.NODE_ENV==='production' ? prodStore : devStore }>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
