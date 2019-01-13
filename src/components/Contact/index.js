import React, { Component } from 'react';
import { Container } from '../Home'
import PageTitle from '../PageTitle'

class Contact extends Component {
  render() {
    return (
      <Container>
        <PageTitle title="contact" />
        <h1>Contact!</h1>
      </Container>
    )
  }
}

export default Contact;