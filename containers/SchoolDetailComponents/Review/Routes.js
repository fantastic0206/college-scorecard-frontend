import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostFormModal from 'components/Reddish/PostFormModal';
import PostList from 'components/Reddish/PostList';
import PostCommentsPage from 'components/Reddish/PostCommentsPage';
import UserPage from 'components/Reddish/UserPage';
import SubPage from 'components/Reddish/SubPage';
import TopSubsPanel from 'components/Reddish/TopSubsPanel';
import SearchResults from 'components/Reddish/SearchResults';
import NotFoundPage from 'components/Reddish/NotFoundPage';

import { Container } from '@material-ui/core/';
import { useMainPaperStyles } from 'components/Reddish/styles/muiStyles';

const Routes = () => {
  const classes = useMainPaperStyles();

  return (
    <Switch>
      <Route exact path="/">
        <Container disableGutters className={classes.homepage}>
          <div className={classes.postsPanel}>
            <PostFormModal />
            <PostList />
          </div>
          <TopSubsPanel />
        </Container>
      </Route>
      <Route exact path="/comments/:id">
        <PostCommentsPage />
      </Route>
      <Route exact path="/u/:username">
        <UserPage />
      </Route>
      <Route exact path="/r/:sub">
        <SubPage />
      </Route>
      <Route exact path="/search/:query">
        <SearchResults />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;
