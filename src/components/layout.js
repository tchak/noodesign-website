import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="font-sans bg-black text-grey-lightest flex flex-col min-h-screen">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div
            role="main"
            className="flex flex-col flex-1 w-full tracking-wide"
          >
            {children}
          </div>

          <footer className="bg-transparent" />
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
