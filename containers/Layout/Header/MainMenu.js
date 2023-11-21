import React from "react";
import { withRouter } from "next/router";
import ActiveLink from "library/helpers/activeLink";

import {
  HOME_PAGE,
  ABOUT_DATA_PAGE,
  SEARCH_PAGE,
  COMPARE_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
} from "settings/constant";

const MainMenu = ({ className, router }) => {
  return (
    <ul className={`ant-menu ${className}`}>
      {/* <li>
        <ActiveLink
          className={router.pathname === HOME_PAGE ? 'active' : ''}
          href={HOME_PAGE}
        >
          Hotels
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === LISTING_POSTS_PAGE ? 'active' : ''}
          href={LISTING_POSTS_PAGE}
        >
          Listing
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === AGENT_PROFILE_PAGE ? 'active' : ''}
          href={AGENT_PROFILE_PAGE}
        >
          Agent
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === PRICING_PLAN_PAGE ? 'active' : ''}
          href={PRICING_PLAN_PAGE}
        >
          Pricing
        </ActiveLink>
      </li> */}
      <li>
        <ActiveLink
          className={router.pathname === HOME_PAGE ? "active" : ""}
          href={HOME_PAGE}
        >
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === ABOUT_DATA_PAGE ? "active" : ""}
          href={ABOUT_DATA_PAGE}
        >
          About the Data
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === SEARCH_PAGE ? "active" : ""}
          href={SEARCH_PAGE}
        >
          Search
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === COMPARE_PAGE ? "active" : ""}
          href={COMPARE_PAGE}
        >
          Compare
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === LOGIN_PAGE ? "active" : ""}
          href={LOGIN_PAGE}
        >
          Sign In
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={router.pathname === REGISTRATION_PAGE ? "active" : ""}
          href={REGISTRATION_PAGE}
        >
          Sign Up
        </ActiveLink>
      </li>
    </ul>
  );
};

export default withRouter(MainMenu);
