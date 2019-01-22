import React, { Component } from 'react'
import styled from 'styled-components';
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


const ColumnBold = styled.p`
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
          <ColumnBold>Technologies</ColumnBold>
          <ColumnBold>Languages</ColumnBold>
          <ColumnBold>Libraries</ColumnBold>
        </Row>
      </Container>
    )
  }
}

export default Work;