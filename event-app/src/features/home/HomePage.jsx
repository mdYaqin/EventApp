import React from 'react'
import { Button, Header, Icon, Image } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

const Homepage = ({ history }) => {
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
        <Button onClick={() => history.push('/events')} size='huge' inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}

export default Homepage
