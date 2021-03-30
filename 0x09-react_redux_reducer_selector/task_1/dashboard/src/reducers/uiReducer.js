import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

// Reducers are functions that take the current state and an action as arguments, and return a new state result.
// In other words, (state, action) => newState.
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

const uiReducer = (state = initialState, action = {}) => {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      // If so, make a copy of `state` and set value to true
      return { ...state, isNotificationDrawerVisible: true };
    case HIDE_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: false };
    case LOGIN_SUCCESS:
      return { ...state, isUserLoggedIn: true };
    case LOGIN_FAILURE:
    case LOGOUT:
      return { ...state, isUserLoggedIn: false };
    default:
      // return the existing state unchanged
      return state;
  }
};
export default uiReducer;
