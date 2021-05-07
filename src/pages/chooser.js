import React from 'react'
import {Icon} from 'graphcool-styles'
import Link from 'gatsby-link'
import classNames from 'classnames';
import withWidth from '../components/with-width';
import DottedListItem from '../components/dotted-list-item';
import LeftColumn from '../components/left-column';
import data from '../components/list';

import '../styles/reset.css'
import '../styles/main.css'

class Chooser extends React.Component {
  state = {
    selectedIndex: 0
  }

  selectStack = (index) => {
    this.setState({ selectedIndex: index });
  }

  render() {
    const { width } = this.props;
    const { selectedIndex } = this.state;
    const selected = data[selectedIndex];
    const widthElement = 140 + 20;
    const widthElementSelected = 140 + 84;
    const translateX = (width / 2) - (widthElement * selectedIndex) - (widthElementSelected / 2);
    return (
      <div className="steps-container">
        <style jsx={true}>{`
          div.steps-container {
            @p: .white, .bgDarkBlue;
          }

          img {
            @p: .mh6;
            height: 40px !important;
            width: auto !important;
          }

          .stacks-content {
            @p: .overflowHidden, .flex;
            height: 180px;
            align-items: center;
          }
          .stacks {
            @p: .flex;
            transition: transform 0.2s ease-out;
            align-items: center;
          }
          .stacks-item {
            @p: .tc, .pointer;
            cursor: pointer;
            transition: all 0.1s ease-out;
            user-select: none;
            width: 140px;
            margin: 0 10px;
          }
          .stacks-item img {
            @p: .o30;
            filter: grayscale(100%);
          }
          .stacks-item p {
            @p: .mt10, .o40, .f14;
          }
          .stacks-item.active {
            @p: .ba, .bWhite20, .bw2, .pv16;
            transform: scale(1.2);
            border-radius: 6px;
            margin: 0 40px;
          }
          .stacks-item.active img {
            @p: .o100;
            filter: grayscale(0%);
          }
          .stacks-item.active p {
            @p: .o100;
          }

          .steps-content {
            @p: .flex;
          }
          .steps-content :global(.steps-description) {
            margin-top: 48px;
          }
          .steps-list {
            @p: .w50;
          }
          .steps-list.fade-before::before {
            content: '';
            display: block;
            height: 48px;
            background-image: linear-gradient(to top, rgba(225, 225, 225, 0.2), #172a3a);
            width: 2px;
          }
          .steps-list::after {
            content: '';
            display: block;
            height: 48px;
            background-image: linear-gradient(to bottom, rgba(225, 225, 225, 0.2), #172a3a);
            width: 2px;
          }
        `}</style>
        <div className="steps-content">
          <LeftColumn>
            <h3>Practical part</h3>
          </LeftColumn>
          <div className="steps-list">
            <DottedListItem>
              <Link to={''}>
                Which tutorial should I pick next?
              </Link>
            </DottedListItem>
          </div>
        </div>
        <div className="stacks-content">
          <div className="stacks" style={{ transform: `translateX(${translateX}px)` }}>
            {data.map((tuto, index) =>
              <div className={classNames('stacks-item', {
                active: selectedIndex === index
              })} onClick={this.selectStack.bind(this, index)} key={index}>
                <div>
                  <img src={tuto.images[0]} />
                  {tuto.images[1] && <img src={tuto.images[1]} />}
                  <p>{tuto.title}</p>
                </div>
              </div>)}
          </div>
        </div>
        <div className="steps-content">
          <LeftColumn className="steps-description">
            <h3>{selected.content.title}</h3>
            <p>{selected.content.description}</p>
          </LeftColumn>
          <div className="steps-list fade-before">
            {selected.steps.map((step, index) =>
              <DottedListItem key={index}>
                <Link to={step.link}>
                  {step.title}
                </Link>
              </DottedListItem>)}
          </div>
        </div>
      </div>
    )
  }
}

export default withWidth()(Chooser);
