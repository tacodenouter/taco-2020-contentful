import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: #121212;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 - Page not found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Container>
      <img src="https://images.ctfassets.net/tqzzgau2w222/4sXxSTSaM32j2PhhPYRJ2y/dee5ef9bf11d6fd1e82465c9797b5b47/On_A_Computer.png" alt="Oh no! Computer says no" />
      <PageTitle>Page not found</PageTitle>
      <Text>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </Text>
    </Container>
  </Layout>
)

export default NotFoundPage
