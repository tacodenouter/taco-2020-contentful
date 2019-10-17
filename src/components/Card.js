import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  margin: 0 0 1em 0;
  width: 100%;
  transition: all .2s ease-in;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.white};
    box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
    p {
      font-size: 1rem;
      padding-bottom: 1.4rem;
    }
  }
`

const Title = styled.h2`
  font-family: 'Gopher-Medium';
  font-size: 1.5em;
  font-weight: 300;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  color: gray;
`

const ReadingTime = styled.h4`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const Card = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  body: {
    childMarkdownRemark: { timeToRead },
  },
  ...props
}) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
        <Title>{title}</Title>
        <ReadingTime>{timeToRead} min read</ReadingTime>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default Card
