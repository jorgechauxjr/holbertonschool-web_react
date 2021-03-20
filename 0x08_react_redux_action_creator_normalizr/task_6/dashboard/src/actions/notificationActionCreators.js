import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// https://www.youtube.com/watch?v=2iAKHu2rw-g
// Action creators are functions that create actions
// https://es.redux.js.org/docs/api/bind-action-creators.html

export const markAsRead = (index) =>
dispatch(
  {
    type: MARK_AS_READ,
    index
  }
  );
export const setNotificationFilter = (filter) =>
dispatch(
  {
    type: SET_TYPE_FILTER,
    filter
  }
  );
