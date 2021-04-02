/* @flow weak */
import React from 'react'
import PropTypes from 'prop-types'
import { prefixLink } from 'gatsby-helpers'

const defaultMessage = `
Gatsby is currently using the default template for HTML. You can override
this functionality by creating a React component at "/html.js"
You can see what this default template does by visiting:
https://github.com/gatsbyjs/gatsby/blob/master/lib/isomorphic/html.js
`
console.info(defaultMessage)

const Html = props => (
  <html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
    />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
  </head>
  <body>
  <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
  <script src={prefixLink('/bundle.js')} />
  </body>
  </html>
)

Html.propTypes = {
  body: PropTypes.node,
}

Html.defaultProps = {
  body: '',
}

export default Html