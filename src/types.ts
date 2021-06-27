export interface RelayConnection<T> {
  edges: Array<RelayEdge<T>>
}

interface RelayEdge<T> {
  node: T
}

export interface MarkdownRemark {
  html: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

export interface Step {
  title: string
  link: string
}
