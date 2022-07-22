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
    videoId?: string
    videoAuthor?: string
    question: string
    answers: string[]
    correctAnswer: number
    description?: string
  }
}

export interface Step {
  title: string
  link: string
  time?: number
  read?: boolean
  description?: string
}

export interface Stack {
  title: string
  key: string
  images: string[]
  authorName: string
  content: {
    title: string
    description: string
  }
  type: StackType
  color1?: string
  color2?: string
  beginnersChoice?: boolean
  comingSoon?: boolean
  darkenGreyLogo?: boolean
  lightenLogo?: boolean
}

type StackType = 'frontend' | 'backend'
