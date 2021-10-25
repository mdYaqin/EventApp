import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

const Homepage = () => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginBottom: 12 }}
          />{' '}
          Artsy Event
        </Header>
      </Container>
    </Segment>
  )
}

export default Homepage
