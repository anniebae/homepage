import React, { Component } from 'react'
import styled from 'styled-components';
import { FaAsterisk } from 'react-icons/fa';
import { Container } from '../Home'
import PageTitle from '../PageTitle'

import WorkBackground from '../../images/IMG_2390.JPG';


const Banner = styled.div`
  background-image: url(${WorkBackground});
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover {
    opacity: .7;
  }
`
export const BannerText = styled.h1`
  color: rgba(255,255,255,1);
  text-shadow: 2px 2px 3px rgba(0,0,0,0.1);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`


const Column = styled.div`
`

const ColH1Title = styled.h1`
  font-weight: 600;
  font-size: 18px;
`

const ColTitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
`
const ColItem = styled.p`
  font-size: 14px;
`

class Work extends Component {
  render() {
    return(
      <Container>
        <PageTitle title="work" />
        <Banner>
          <BannerText>oy vey</BannerText>
        </Banner>
        <Row>
          <Column>
            <ColH1Title>Technologies</ColH1Title>
          </Column>

          <Column>
            <ColTitle>Languages</ColTitle>
            <ColItem>Sass / LESS</ColItem>
            <ColItem>HTML5 / CSS3</ColItem>
            <ColItem>JavaScript / jQuery</ColItem>
            <ColItem>Photoshop / Zeplin</ColItem>
            <ColItem>Version Control (GIT)</ColItem>
            <ColItem>Bootstrap</ColItem>
            <ColItem>Responsive Web Design</ColItem>
            <ColItem>Cross-Browser Testing</ColItem>
            <ColItem>Mobile First Build</ColItem>
          </Column>

          <Column>
            <ColTitle>Libraries</ColTitle>
            <ColItem>AJAX</ColItem>
            <ColItem>Node.js</ColItem>
            <ColItem>React.js</ColItem>
            <ColItem>Backbone.js</ColItem>
          </Column>

        </Row>
      </Container>
    )
  }
}

export default Work;