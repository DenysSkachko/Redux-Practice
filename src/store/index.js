import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';
import { recipeReducer } from './recipeReducer';
import { tagReducer } from './tagReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  tags: tagReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
