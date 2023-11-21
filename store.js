import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import notificationReducer from 'reducers/reddish/notificationReducer';
import userReducer from 'reducers/reddish/userReducer';
import postReducer from 'reducers/reddish/postReducer';
import subReducer from 'reducers/reddish/subReducer';
import postCommentsReducer from 'reducers/reddish/postCommentsReducer';
import userPageReducer from 'reducers/reddish/userPageReducer';
import subPageReducer from 'reducers/reddish/subPageReducer';
import searchReducer from 'reducers/reddish/searchReducer';
import themeReducer from 'reducers/reddish/themeReducer';

const reducer = combineReducers({
  user: userReducer,
  notification: notificationReducer,
  posts: postReducer,
  postComments: postCommentsReducer,
  subs: subReducer,
  userPage: userPageReducer,
  subPage: subPageReducer,
  search: searchReducer,
  darkMode: themeReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
