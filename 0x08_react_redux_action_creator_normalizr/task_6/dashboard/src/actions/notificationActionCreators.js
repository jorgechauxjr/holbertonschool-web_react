import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// https://www.youtube.com/watch?v=2iAKHu2rw-g
// Action creators are functions that create actions
export const markAsRead = (index) => (
  {
    type: MARK_AS_READ,
    index
  }
  );
export const setNotificationFilter = (filter) => (
  {
    type: SET_TYPE_FILTER,
    filter
  }
  );
