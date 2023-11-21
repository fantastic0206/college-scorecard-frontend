import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "reducers/reddish/userReducer";
import { fetchPosts } from "reducers/reddish/postReducer";
import { setSubList, setTopSubsList } from "reducers/reddish/subReducer";
import { setDarkMode } from "reducers/reddish/themeReducer";
import { notify } from "reducers/reddish/notificationReducer";
import NavBar from "components/reddish/NavBar";
import ToastNotif from "components/reddish/ToastNotif";
import Routes from "./Routes";
import getErrorMsg from "utils/getErrorMsg";
import { BrowserRouter as Router } from "react-router-dom";
import PostFormModal from "components/Reddish/PostFormModal";

import { Container } from "@material-ui/core/";

import { Paper } from "@material-ui/core/";
import customTheme from "components/reddish/styles/customTheme";
import { useMainPaperStyles } from "components/reddish/styles/muiStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import PostList from "components/Reddish/PostList";
import TopSubsPanel from "components/Reddish/TopSubsPanel";
import { ReviewArea } from "./Review.style";

const Review = () => {
  const classes = useMainPaperStyles();
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state);

  useEffect(() => {
    const setPostsAndSubreddits = async () => {
      try {
        await dispatch(fetchPosts("hot"));
        await dispatch(setSubList());
        await dispatch(setTopSubsList());
      } catch (err) {
        dispatch(notify(getErrorMsg(err), "error"));
      }
    };

    dispatch(setUser());
    dispatch(setDarkMode());
    setPostsAndSubreddits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <ToastNotif />
      <ReviewArea>
        <Container>
          <div>
            <PostFormModal />
            <PostList />
          </div>
          <TopSubsPanel />
        </Container>
      </ReviewArea>
    </Router>
  );
};

export default Review;
