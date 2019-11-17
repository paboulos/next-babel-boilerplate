// @flow
import React from 'react';
import Link from 'next/link';
import Page from '../components/Page';
import { getLayout } from '../components/SiteLayout';
/* Without CSS Modules, maybe with PostCSS */
import '../style.css';
/* With CSS Modules */
/*
import css from "../style.css"
export default () => <div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
*/
const Index = () => (
   <div className="block">
    <h1 className="text-center">
      <span className="block text-gray leading-tight">
        Welcome to the
      </span>
      <span className="block bold leading-none">
        Web App
      </span>
    </h1>
    <div className="text-center">
      <Link href="/submenu-one/tab-one">
        <a className="inline-block example hover:black">
          View Settings
        </a>
      </Link>
    </div>
  </div>
)

Index.getLayout = getLayout;

export default Index;