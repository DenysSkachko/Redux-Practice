const defaultState = {
  active: [],
};

const ADD_TAG = 'ADD_TAG';
const REMOVE_TAG = 'REMOVE_TAG';
const TOGGLE_TAG = 'TOGGLE_TAG';
const CLEAR_TAGS = 'CLEAR_TAGS';

export const tagReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TAG:
      if (!state.active.includes(action.payload)) {
        return { ...state, active: [...state.active, action.payload] };
      }
      return state;
    case REMOVE_TAG:
      return { ...state, active: state.active.filter((t) => t !== action.payload) };
    case TOGGLE_TAG:
      return state.active.includes(action.payload)
        ? { ...state, active: state.active.filter((t) => t !== action.payload) }
        : { ...state, active: [...state.active, action.payload] };
    case CLEAR_TAGS:
      return { ...state, active: [] };
    default:
      return state;
  }
};

export const addTag = (tag) => ({ type: ADD_TAG, payload: tag });
export const removeTag = (tag) => ({ type: REMOVE_TAG, payload: tag });
export const toggleTag = (tag) => ({ type: TOGGLE_TAG, payload: tag });
export const clearTags = () => ({ type: CLEAR_TAGS });
