import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import './theme.css'

const Layout = ({ children }) => (
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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: "Organic Books is the new used bookstore in Albuquerque's Nob Hill." },
            { name: 'keywords', content: 'book, bookstore, Nob Hill, Albuquerque, New Mexico, used books, Steve Brewer, Max Brewer, Kelly Brewer, Seth Brewer, Jalila Arthur, ABQ, Nob Hill, Carlisle, La Montanita Co-op, Scalo, Beeps, Terra Firma, The Herb Shop, LaVonBlu' },
            { name:"google-site-verification", content:"iIvAGmtl2aJi--UTBpgoHr1RPvxRj4syRljS0KksudY" }
          ]}
        >
          <html lang="en" />
          @import url('https://fonts.googleapis.com/css?family=Andada')

        </Helmet>
        <main
          style={{
          }}
        >
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
