import React, { Component } from 'react';
import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const Name = styled.h1`
  color: rgba(70, 113, 122, 1);
  text-align: center;
`
const LastNm = styled.span`
  color: rgba(70, 113, 122, .75)
`

class Home extends Component {
  render() {
    return(
      <Container>
        <Name>
          annie
          <LastNm>bae</LastNm>
        </Name>
      </Container>
    )
  }
}

export default Home;