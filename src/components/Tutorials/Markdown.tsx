import * as React from 'react'
import JsxParser from 'react-jsx-parser'
import Instruction from './Instruction'
import Pre from './Pre'

export default function Markdown({ html }: { html: string }) {
  return (
    <div className="markdown">
      <style jsx={true} global={true}>{`
        .markdown {
          @p: .lhCopy, .darkBlue70;
        }
        .markdown h1, .markdown h2, .markdown h3, .markdown h4 {
          @p: .lhTitle, .darkBlue, .fw6;
        }
        .markdown h1 {
          @p: .f38, .mb25;
        }
        .markdown h2 {
          @p: .f25, .fw7;
        }
        .markdown h3 {
          @p: .f20, .fw7;
          margin-top: 30px;
        }
        .markdown h2 {
          margin-top: 48px; /* 2x mt38 due to vertical line */
        }
        .markdown h4 {
          @p: .fw7;
          margin-top: 20px;
        }
        .markdown p {
          @p: .f16;
        }
        .markdown p, .markdown ul {
          @p: .mt16;
        }
        .markdown img {
          max-width: 600px;
        }
        .fl {
          @p: .flex;
        }
        /* Text Links */
        .markdown p a, .markdown li a {
          @p: .noUnderline, .blue;
        }
        .markdown p a:hover, .markdown li a:hover {
          @p: .underline;
        } /* Lists */
        .markdown ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .markdown ol {
          @p: .mt25;
          padding-left: 19px;
          list-style-type: decimal;
          counter-reset: list;
        }
        .markdown ul li {
          @p: .relative, .mt10, .pl25;
        }
        div.markdown ol li {
          @p: .relative, .mt10, .pl16;
        }
        .markdown ul li:before, .markdown ol li:before {
          @p: .absolute;
          left: 8px;
        }
        .markdown ul li:before {
          content: "";
          @p: .bgDarkBlue30, .brPill;
          width: 6px;
          height: 6px;
          left: 8px;
          top: 10px;
        } /* Inline Code Snippets */
        .markdown p code,
        .markdown li code,
        .markdown h2 code,
        .markdown h3 code,
        .markdown h4 code {
          @p: .br2, .dib, .purple, .lhSolid;
          padding: 4px 4px 3px;
          background: $darkBlue06;
          vertical-align: text-bottom;
        }
        .markdown p code {
          @p: .f16;
        }
        .container.smallFont .markdown p code {
          @p: .f14;
        }
        .markdown h2 code {
          font-size: 25px;
          padding: 6px 8px 4px;
          position: relative;
          top: 2px;
        }
        .markdown h3 code {
          font-size: 20px;
          padding: 6px 6px 4px;
          position: relative;
          top: 2px;
        }
        .markdown h4 code {
          font-size: 18px;
          padding: 6px 6px 4px;
        }
        /* Blockquotes */
        .markdown blockquote {
          @p: .ma0, .pl16;
          padding-bottom: 2px;
          border-left: 4px solid $darkBlue10;
        }
        .markdown blockquote p:first-child {
          @p: .mt0, .pt6;
        }
        .markdown h2 {
          margin-top: 76px;
          /* 2x mt38 due to vertical line */
        }
        .markdown h3 {
          margin-top: 30px;
        }
        .markdown h4 {
          margin-top: 20px;
        }
        .markdown p {
          @p: .mt16;
        }
        /* First child never has top padding */
        .container:first-of-type .markdown:first-child .heading-link:first-child h2,
        .container:first-of-type .markdown:first-child .heading-link:first-child h3,
        .container:first-of-type .markdown:first-child .heading-link:first-child h4,
        .container:first-of-type .markdown:first-child p:first-child {
          @p: .mt0;
        } /* Extra Margins for Content Blocks: BlockQuote, Code container */
        .markdown .markdown-codecontainer,
        .markdown blockquote,
        .markdown ul,
        .markdown .imageContainer {
          @p: .mt16;
          margin-bottom: 30px;
        }
        .gatsby-highlight-code-line {
          background-color: $darkBlue06;
          display: block;
          margin-right: -16px;
          margin-left: -16px;
          padding-right: 16px;
          padding-left: 13px;
          border-left: 3px solid $darkBlue20;
        }
      `}</style>
      <JsxParser
        jsx={html}
        components={{ INSTRUCTION: Instruction, PRE: Pre }}
        showWarnings={true}
      />
    </div>
  )
}

/*<div dangerouslySetInnerHTML={{ __html: post.html }} />*/
