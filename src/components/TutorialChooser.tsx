import * as React from 'react'
import data from '../data/stacks'
import StackChooser from './StackChooser'
import { Step } from '../types'
import Link from 'gatsby-link'

interface Props {
  markdownFiles: { [key: string]: Step[] }
}

interface State {
  selectedIndex: number
}

export default class TutorialChooser extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 0,
    }
  }

  render() {
    const { markdownFiles } = this.props

    const selected = data[this.state.selectedIndex]
    return (
      <div className="tutorial-chooser">
        <style jsx={true}>{`
          .center-container {
            @p: .flex, .justifyCenter;
          }
          .tutorial-chooser :global(.stacks-item:not(.active)) :global(img) {
            filter: grayscale(100%) !important;
          }
        `}</style>
        <StackChooser
          selectedIndex={this.state.selectedIndex}
          markdownFiles={this.props.markdownFiles}
          onChangeSelectedIndex={this.handleSelectIndex}
          stacks={data}
          fixedWidth={960}
          showSelectedBorder={true}
        />
        <div className="center-container">
          <Link to={markdownFiles[selected.key][0].link}>
            <div className="btn small">
              Continue with the {selected.title} Tutorial
            </div>
          </Link>
        </div>
      </div>
    )
  }

  private handleSelectIndex = i => {
    this.setState({ selectedIndex: i })
  }
}
