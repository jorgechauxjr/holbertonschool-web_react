import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

// https://www.youtube.com/watch?v=2iAKHu2rw-g
// Action creators are functions that create actions
// https://es.redux.js.org/docs/api/bind-action-creators.html

export const login = (email, password) =>
dispatch(
  {
    type: LOGIN,
    user: { email, password }
  }
);

export const logout = () =>
dispatch(
  {
    type: LOGOUT
  }
);

export const displayNotificationDrawer = () =>
dispatch(
  {
    type: DISPLAY_NOTIFICATION_DRAWER
  }
);

export const hideNotificationDrawer = () =>
dispatch(
  {
    type: HIDE_NOTIFICATION_DRAWER
  }
);
