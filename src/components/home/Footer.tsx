import * as React from 'react'
import Icon from 'graphcool-styles/dist/components/Icon/Icon'
import { $v } from 'graphcool-styles'

export default function Footer() {
  return (
    <div className="footer">
      <style jsx={true}>{`
        .footer {
          @p: .tc, .pv38, .black40, .relative, .z2;
          background-color: rgba(0, 0, 0, .03);
          border-top: 2px solid rgba(0, 0, 0, 0.1);
          padding-left: 30px;
          padding-right: 30px;
          line-height: 1.5;
        }
        .love {
          @p: .red;
        }
        .logos {
          @p: .flex, .justifyCenter, .mt25;
        }
        .logos :global(*) + :global(*) {
          @p: .ml16;
        }
        img {
          height: 28px;
          width: auto;
        }
        a {
          @p: .black40;
        }
        a:hover {
          @p: .underline;
        }
      `}</style>
      <span>
        Made with <span className="love"> ♥ </span> by{' '}
        <a href="https://www.graph.cool" target="_blank">Graphcool</a> and the
        amazing
        GraphQL community
      </span>
      <div className="logos">
        <a href="https://slack.graph.cool" target="_blank">
          <img src={require('../../assets/icons/slack.svg')} alt="" />
        </a>
        <a href="https://twitter.com/graphcool" target="_blank">
          <img src={require('../../assets/icons/twitter.svg')} alt="" />
        </a>
        <a href="https://github.com/howtographql/howtographql" target="_blank">
          <Icon
            src={require('graphcool-styles/icons/fill/github.svg')}
            color={$v.black}
            width={28}
            height={28}
          />
        </a>
      </div>
    </div>
  )
}
