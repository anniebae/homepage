import React, { Component } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
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

const ContactBody = styled.ul`
  list-style-type: none;
  font-size: 14px;
  padding: 0;
  max-width: 100px;
  margin: auto;
`

const ContactItem = styled.li`
  margin: .5em 0;
`

class Contact extends Component {
  render() {
    return (
      <Container>
        <PageTitle title="contact" />
        <Banner>
          <BannerText>contact</BannerText>
        </Banner>

        <ContactBody>
          <a href="mailto:bae.annie@gmail.com?subject=Hi Annie!&body=Sent from anniebae.com">
            <ContactItem><FaEnvelope size={12} color='#537757' /> email</ContactItem>
          </a>
          <a href="https://www.linkedin.com/in/anniebae/" target="_blank">
            <ContactItem><FaLinkedinIn size={12} color='#537757' /> linkedin</ContactItem>
          </a>
          <a href="https://www.instagram.com/anniebae/" target="_blank">
            <ContactItem><FaInstagram size={12} color='#537757' /> instagram</ContactItem>
          </a>
          <a href="https://twitter.com/bae_annie" target="_blank">
            <ContactItem><FaTwitter size={12} color='#537757' /> twitter</ContactItem>
          </a>
            
        </ContactBody>
      </Container>
    )
  }
}

export default Contact;