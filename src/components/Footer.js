import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 100%;
  background: ${props => props.theme.colors.bgDarker};
  margin-top: 60px;
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  font-size: 0.7em;
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="https://www.tacodenouter.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="../logos/logo.svg"
            style={{ width: '60px' }}
            alt="Taco den Outer"
          />
        </a>
      </Item>
      <Item>
        I've used{' '}
        <a
          href="https://github.com/ryanwiemer/gatsby-starter-gcn"
          target="_blank"
          rel="noopener noreferrer"
        >
           this excellent Gatsby starter
        </a>{' '}
        for this site.
      </Item>
    </List>
  </Wrapper>
)

export default Footer
