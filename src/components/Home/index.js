import React, { Component } from 'react';
import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: palevioletred;
`


class Home extends Component {
  render() {
    return(
      <Container>
        <Title>hello home</Title>
      </Container>
    )
  }
}

export default Home;