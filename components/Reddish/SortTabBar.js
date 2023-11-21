// import {Best } from './svg/best.svg';
import {ReactComponent as Hot} from './svg/hot.svg';
// import { New } from './svg/new.svg';
// import { Top } from './svg/top.svg';
// import { Controversial } from './svg/controversial.svg';
// import { Old } from './svg/old.svg';
// import { Subscribed } from './svg/subscribed.svg';

import { Paper, Tabs, Tab, SvgIcon } from '@material-ui/core';
import { useSortTabStyles } from './styles/muiStyles';

const SortTabBar = ({ sortBy, handleTabChange, subscribedTab, user }) => {
  const classes = useSortTabStyles();

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      <Tabs
        value={sortBy}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab
          // icon={
          //   <SvgIcon fontSize="small">
          //     {Hot}
          //   </SvgIcon>
          // }
          label="Hot"
          value="hot"
        />
        {subscribedTab && user && (
          <Tab
            // icon={
            //   <SvgIcon fontSize="small">
            //     <Subscribed />
            //   </SvgIcon>
            // }
            label="Subscribed"
            value="subscribed"
          />
        )}
        <Tab
          // icon={
          //   <SvgIcon fontSize="small">
          //     <Best />
          //   </SvgIcon>
          // }
          label="Best"
          value="best"
        />
        <Tab
          // icon={
          //   <SvgIcon fontSize="small">
          //     <New />
          //   </SvgIcon>
          // }
          label="New"
          value="new"
        />
        <Tab
          // icon={
          //   <SvgIcon fontSize="small">
          //     <Top />
          //   </SvgIcon>
          // }
          label="Top"
          value="top"
        />
        <Tab
          // icon={
          //   <SvgIcon fontSize="small">
          //     <Controversial />
          //   </SvgIcon>
          // }
          label="Controversial"
          value="controversial"
        />
        <Tab
          // icon={
          //   <SvgIcon fontSize="small">
          //     <Old />
          //   </SvgIcon>
          // }
          label="Old"
          value="old"
        />
      </Tabs>
    </Paper>
  );
};

export default SortTabBar;
