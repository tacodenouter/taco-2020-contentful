import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
  background: ${props => props.theme.colors.tertiary};

  h6 {
    font-family: 'Recoleta-RegularDEMO';
    font-size: .8em;
    text-transform: none;
    letter-spacing: 0;
    color: ${props => props.theme.colors.black};
    text-align: center;
    padding: 40px 0;
    margin-top: 40px;
    border-top: 1px solid ${props => props.theme.colors.bgDarker}
    }
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: none;
    color: ${props => props.theme.colors.highlight};
    padding: 1em 1.6em .9em 1.6em;;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.highlight};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: .9rem;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
      color: ${props => props.theme.colors.white};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const PostLinks = props => {
  return (
    <Wrapper>
      <h6>Check out some other projects I've done...</h6>
      <Box>
        {props.previous && (
          <PreviousLink to={`/${props.previous.slug}/`}>
            &#8592; Previous
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`/${props.next.slug}/`}>Next &#8594;</NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
