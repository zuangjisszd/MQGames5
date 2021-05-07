import React from 'react'
import classNames from 'classnames';

const LeftColumn = ({ children, className }) => {
  return (
    <div className={classNames('left-column', className)}>
      <style jsx={true}>{`
        div.left-column {
          @p: .w50, .tr, .white50, .flex, .itemsEnd, .flexColumn;
        }
        div.left-column :global(h3) {
          @p: .f20, .mt16, .pr38;
        }
        div.left-column :global(p) {
          @p: .f16, .mt16, .lhCopy, .pr38;
          max-width: 290px;
        }
      `}</style>
      {children}
    </div>
  )
};

export default LeftColumn;
