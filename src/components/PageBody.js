import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  h1,
  h2 {
    font-family: 'Fractul-Bold', sans-serif;
    font-size: 3.5em;
    line-height: 1;
    margin: 0 0 1rem 0;
    text-transform: none;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
  }

  a {
    transition: 0.2s;
    text-decoration: none;
    color: ${props => props.theme.colors.link};
    &:hover {
      color: ${props => props.theme.colors.linkHover};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: 1px solid;
    border-color: ${props => props.theme.colors.lightGrey};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-family: 'Recoleta-RegularDEMO';
    font-size: 1.7em;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 8px;
    background: ${props => props.theme.colors.white} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
