import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    float: left;
    font-size: .6em;
    transition: 0.2s;
    background: none;
    padding: 0.5em 0.9em 0.3em;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: .07em;
    text-decoration: none;
    color: ${props => props.theme.colors.highlight};
    border: 1px solid ${props => props.theme.colors.highlight};
    &:hover {
      background: ${props => props.theme.colors.highlight};
      color: ${props => props.theme.colors.white};
    }
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
