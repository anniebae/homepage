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

const Main = styled.div`
  background: rgba(83,119,87,.2);
  border-radius: 4px;
  max-width: 550px;
  font-size: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%)
`

const Copy = styled.p`

`


class About extends Component {
  render() {
    return(
      <Container>
        <Background></Background>
        <PageTitle title="about" />

        <Main>
          <Copy>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro minima quasi illo facilis eaque ab nam repellendus, deleniti placeat inventore explicabo numquam unde itaque quidem deserunt sunt eius laboriosam eveniet.</Copy>
          <Copy>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro minima quasi illo facilis eaque ab nam repellendus, deleniti placeat inventore explicabo numquam unde itaque quidem deserunt sunt eius laboriosam eveniet.</Copy>
          <Copy>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro minima quasi illo facilis eaque ab nam repellendus, deleniti placeat inventore explicabo numquam unde itaque quidem deserunt sunt eius laboriosam eveniet.</Copy>
        </Main>
      </Container>
    )
  }
}

export default About;