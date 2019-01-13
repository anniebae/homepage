import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../Home'
import PageTitle from '../PageTitle'
import AboutBackground from '../../images/bnw.png';



const Background = styled.div`
  background-image: url(${AboutBackground});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  opacity: .3;
`


class About extends Component {
  render() {
    return(
      <Container>
        <Background></Background>
        <PageTitle title="about" />
      </Container>
    )
  }
}

export default About;