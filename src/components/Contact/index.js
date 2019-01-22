import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../Home'
import { BannerText } from '../Work'
import PageTitle from '../PageTitle'
import ContactBackground from '../../images/IMG_2392.JPG';


const Banner = styled.div`
  background-image: url(${ContactBackground});
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover {
    opacity: .7;
  }
`

class Contact extends Component {
  render() {
    return (
      <Container>
        <PageTitle title="contact" />
        <Banner>
          <BannerText>contact</BannerText>
        </Banner>
      </Container>
    )
  }
}

export default Contact;