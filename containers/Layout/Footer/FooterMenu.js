import React from 'react';
import Link from 'next/link';

import {
  HOME_PAGE,
  ABOUT_DATA_PAGE,
  SEARCH_PAGE,
  COMPARE_PAGE
} from 'settings/constant';

const FooterMenu = () => {
  return (
    <ul className="ant-menu">
      <li>
        <Link href={`${HOME_PAGE}`}>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href={`${ABOUT_DATA_PAGE}`}>
          <a>About the Data</a>
        </Link>
      </li>
      <li>
        <Link href={`${SEARCH_PAGE}`}>
          <a>Search</a>
        </Link>
      </li>
      <li>
        <Link href={`${COMPARE_PAGE}`}>
          <a>Compare</a>
        </Link>
      </li>
    </ul>
  );
};

export default FooterMenu;
