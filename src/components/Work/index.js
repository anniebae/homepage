import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FaArrowDown, FaGithub } from 'react-icons/fa';
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
  letter-spacing: .2em;
`

const BodyContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 75%;
`

const Row = styled.div`
  @media (min-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
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
  cursor: pointer;
`
const ColItem = styled.p`
  font-size: 14px;
  display: none;

  &.showItem {
    display: block;
  }

  @media (min-width: 767px) {
    display: block;
  }
`
const GithubDiv = styled.div`
`

class Work extends Component {
  constructor(props) {
    super(props);
    this.showKnowList = this.showKnowList.bind(this)
    this.showUseList = this.showUseList.bind(this)

    this.state = {
      knowList: false,
      useList: false
    }
  }
  showKnowList() {
    this.setState({
      knowList: true
    });
  }

  showUseList() {
    this.setState({
      useList: true
    });
  }
  render() {
    return(
      <Container>
        <PageTitle title="work" />
        <Banner>
          <BannerText>work</BannerText>
        </Banner>

        <BodyContainer>
          <Row>
            <Column>
              <ColH1Title>Technologies</ColH1Title>
            </Column>

            <Column>
              <ColTitle onClick={this.showKnowList}>I know <FaArrowDown size={12} color='#537757' /></ColTitle>
              <ColItem className={this.state.knowList ? 'showItem' : ''}>Sass / LESS</ColItem>
              <ColItem className={this.state.knowList ? 'showItem' : ''}>HTML5 / CSS3</ColItem>
              <ColItem className={this.state.knowList ? 'showItem' : ''}>JavaScript / jQuery</ColItem>
              <ColItem className={this.state.knowList ? 'showItem' : ''}>Photoshop / Zeplin</ColItem>
              <ColItem className={this.state.knowList ? 'showItem' : ''}>Version Control (GIT)</ColItem>
              <ColItem className={this.state.knowList ? 'showItem' : ''}>Bootstrap</ColItem>
              <ColItem className={this.state.knowList ? 'showItem' : ''}>Responsive Web Design</ColItem>
              <ColItem className={this.state.knowList ? 'showItem' : ''}>Cross-Browser Testing</ColItem>
              <ColItem className={this.state.knowList ? 'showItem' : ''}>Mobile First Build</ColItem>
            </Column>

            <Column>
              <ColTitle onClick={this.showUseList}>I use <FaArrowDown size={12} color='#537757' /></ColTitle>
              <ColItem className={this.state.useList ? 'showItem' : ''}>AJAX</ColItem>
              <ColItem className={this.state.useList ? 'showItem' : ''}>Node.js</ColItem>
              <ColItem className={this.state.useList ? 'showItem' : ''}>React.js</ColItem>
              <ColItem className={this.state.useList ? 'showItem' : ''}>Backbone.js</ColItem>
            </Column>

          </Row>

          <GithubDiv>
            <a href="https://github.com/anniebae" target="_blank">
              <FaGithub />
            </a>
          </GithubDiv>
        </BodyContainer>
      </Container>
    )
  }
}

export default Work;