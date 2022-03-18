import * as React from 'react'
import Confetti from 'react-confetti'

interface Props {
  n: number
}

export default function Unlocked({ n }: Props) {
  return (
    <div className="well-done">
      <style jsx={true}>{`
        .well-done {
          @p: .bt,
            .bb,
            .bBlack10,
            .bw2,
            .pa60,
            .bbox,
            .flex,
            .itemsCenter,
            .justifyCenter,
            .mt38,
            .relative,
            .overflowHidden;
          background-color: #fafafa;
        }
        .well-done span {
          @p: .pink, .bgWhite, .ph10, .f14, .fw6, .z2, .ttu, .absolute;
        }
        .well-done :global(canvas) {
          top: -2px !important;
        }
      `}</style>
      <span>
        Well done, you unlocked the next chapter!
      </span>
      <Confetti height={'400%'} numberOfPieces={300} gravity={0.5} />
    </div>
  )
}
// colors={[
//   'rgba(0,0,0,.05)',
//   'rgba(0,0,0,.15)',
//   'rgba(0,0,0,.25)',
//   'rgba(0,0,0,.35)',
//   'rgba(0,0,0,.10)',
//   'rgba(0,0,0,.20)',
//   'rgba(0,0,0,.30)',
//   'rgba(0,0,0,.40)',
// ]}
