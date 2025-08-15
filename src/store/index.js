import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';
import { recipeReducer } from './recipeReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
