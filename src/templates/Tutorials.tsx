import * as React from 'react'
import '../styles/prism-ghcolors.css'
import { MarkdownRemark, RelayConnection } from '../types'
import App from '../components/App'
import Sidebar from '../components/Tutorials/Sidebar'
import Markdown from '../components/Tutorials/Markdown'
import { extractSteps } from '../utils/graphql'

interface Props {
  data: {
    markdownRemark: MarkdownRemark
    mds: RelayConnection<MarkdownRemark>
  }
}

class Tutorials extends React.Component<Props, null> {
  public render() {
    const post = this.props.data.markdownRemark

    const steps = extractSteps(this.props.data.mds)

    return (
      <App>
        <div className="tutorials">
          <style jsx={true}>{`
            .tutorials {
              @p: .flex;
            }
            .content {
              @p: .pa38, .overflowAuto, .bbox;
              max-height: calc(100vh - 72px);
            }
            h1 {
              @p: .f38;
            }
          `}</style>
          <div className="content">
            <h1>{post.frontmatter.title}</h1>
            <Markdown html={post.html} />
          </div>
          <Sidebar steps={steps} tutorialName="react-apollo" />
        </div>
      </App>
    )
  }
}

export default Tutorials

export const pageQuery = graphql`
  query ChapterBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
    mds: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
