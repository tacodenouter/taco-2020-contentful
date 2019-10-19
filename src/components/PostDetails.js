import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.h6`
  display: inline-block;
`

const ReadingTime = styled.h6`
  display: inline-block;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>🍭 {props.date}</Date>
      <span></span>
      <ReadingTime>{`📚${props.timeToRead} min read `}</ReadingTime>
    </Wrapper>
  )
}

export default PostDetails
