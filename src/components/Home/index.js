import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated } from "react-animated-css";
import PageTitle from '../PageTitle'


export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const Name = styled.h1`
  color: rgba(70, 113, 122, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const LastName = styled.span`
  color: rgba(70, 113, 122, .75)
`


 


class Home extends Component {
  render() {
    return(
      <Container>
        <PageTitle title="home" />

        <Name>
          <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
              lorem
              <LastName>ipsum</LastName>.
          </Animated>
        </Name>

   

      </Container>
    )
  }
}

export default Home;