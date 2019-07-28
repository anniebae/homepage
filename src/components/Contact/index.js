import React, { Component } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Container } from '../Home'
import { BannerText } from '../Work'
import ContactBackground from '../../images/IMG_2392.JPG';


const Banner = styled.div`
  margin: 3em 0;
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

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 1.5em;
`

const IconWrap = styled.div`
  margin-right: 1em;
`;

const ContactChannel = styled.li`
  margin: 0;
`

const Link = styled.a`
  text-decoration: none;
  color: #537757;
`

class Contact extends Component {
  render() {
    return (
      <Container>
        <Banner>
          <BannerText>contact</BannerText>
        </Banner>

        <ContactBody>
          <Link href="mailto:bae.annie@gmail.com?subject=Hi Annie!&body=Sent from anniebae.com">
            <Item>
              <IconWrap><FaEnvelope /></IconWrap>
              <ContactChannel>email</ContactChannel>
            </Item>
          </Link>

          <Link href="https://www.linkedin.com/in/anniebae/" target="_blank">
            <Item>
              <IconWrap><FaLinkedinIn /></IconWrap>
              <ContactChannel>linkedin</ContactChannel>
            </Item>
          </Link>
          <Link href="https://www.instagram.com/anniebae/" target="_blank">
            <Item>
              <IconWrap><FaInstagram /></IconWrap>
              <ContactChannel>instagram</ContactChannel>
            </Item>
          </Link>
          <Link href="https://twitter.com/bae_annie" target="_blank">
            <Item>
              <IconWrap><FaTwitter /></IconWrap>
              <ContactChannel>twitter</ContactChannel>
            </Item>
          </Link>
        </ContactBody>
      </Container>
    )
  }
}

export default Contact;