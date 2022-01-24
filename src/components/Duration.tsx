import * as React from 'react'
import * as cn from 'classnames'

interface Props {
  duration: number
  total?: boolean
  dark?: boolean
  className?: string
}

export default function Duration({ duration, total, dark, className }: Props) {
  return (
    <div className={cn('time', className, { dark })}>
      <style jsx={true}>{`
        .time {
          @p: .ttu, .black30, .ml10, .itemsCenter, .flex, .fw6, .relative, .flexFixed;
          font-size: 15px;
        }
        .time.dark {
          @p: .white30;
        }
        .time img {
          width: 15px;
          height: 15px;
        }
        .time span {
          @p: .ml6;
        }
        .time.first {
          top: -3px;
        }
        .time.dark img {
          filter: invert(100%);
        }

        @media (max-width: 500px) {
          div.time {
            display: none;
          }
        }

      `}</style>
      <img src={require('../assets/icons/play.svg')} alt="" />
      <span>{duration} MIN {total ? 'TOTAL' : ''}</span>
    </div>
  )
}
