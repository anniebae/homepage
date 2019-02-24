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
  margin: 5em 0 3em;

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
  margin: 0 0 3em;
  
  @media (min-width: 767px) {
    display: flex;
  }
`

const TitleGroup = styled.div`
  margin: 0 0 1.5em;
  @media (min-width: 767px) {
    width: 33.333%;
    margin: 0;
  }
`
const ListGroup = styled.div`
  width: 66.667%;
  @media (min-width: 767px) {
    display: flex;

    &.mobile { display: none; }
  }
`

const MobileGroup = styled.div`
  margin: 0 0 1.5em;
`
const MobileName = styled.p`
  margin: 0 0 .3em;
`
const MobileSpan = styled.span`
  display: block;
  opacity: 0.5;
  font-size: .8em;
`

const Column = styled.div`
  @media (min-width: 767px) {
    width: 50%;
  }
`

const ColH1Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 2px;
  color: #537757;
`

const BoldTitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  
  @media (min-width: 767px) {
    
  }
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

const TypeBold = styled.p`
  font-weight: 600;
`

const EduDesc = styled.p`
  font-weight: 300;
  font-size: 14px;
`

const GithubDiv = styled.div`
  position: relative;
  top: 25%;

  &:hover {
    opacity: .4;
  }
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
            <TitleGroup>
              <ColH1Title>Technologies</ColH1Title>
            </TitleGroup>
            
            <ListGroup>
              <Column>
                <BoldTitle onClick={this.showKnowList}>I know <FaArrowDown size={12} color='#537757' /></BoldTitle>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>Sass / LESS</ColItem>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>HTML5 / CSS3</ColItem>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>JavaScript / jQuery</ColItem>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>Photoshop / Zeplin</ColItem>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>Version Control (GIT)</ColItem>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>Responsive Web Design</ColItem>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>Cross-Browser Testing</ColItem>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>Mobile First Build</ColItem>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>Active Admin</ColItem>
                <ColItem className={this.state.knowList ? 'showItem' : ''}>Braze</ColItem>
              </Column>

              <Column>
                <BoldTitle onClick={this.showUseList}>I use <FaArrowDown size={12} color='#537757' /></BoldTitle>
                <ColItem className={this.state.useList ? 'showItem' : ''}>AJAX</ColItem>
                <ColItem className={this.state.useList ? 'showItem' : ''}>Node.js</ColItem>
                <ColItem className={this.state.useList ? 'showItem' : ''}>React.js</ColItem>
                <ColItem className={this.state.useList ? 'showItem' : ''}>Backbone.js</ColItem>
              </Column>
            </ListGroup>
          </Row>

          <Row>
            <TitleGroup>
              <ColH1Title>Education</ColH1Title>
            </TitleGroup>

            <ListGroup className="mobile">
              <MobileGroup>
                <MobileName>General Assembly</MobileName>
                <MobileSpan>2014-2015</MobileSpan>
              </MobileGroup>
              <MobileGroup>
                <MobileName>Cardiff University</MobileName>
                <MobileSpan>2013 (study abroad)</MobileSpan>
              </MobileGroup>
              <MobileGroup>
                <MobileName>Rutgers University</MobileName>
                <MobileSpan>2010-2014</MobileSpan>
              </MobileGroup>
              
            </ListGroup>
            
            <ListGroup>
              <Column>
                <ColItem>General Assembly</ColItem>
                <ColItem>Cardiff University</ColItem>
                <ColItem>Rutgers University</ColItem>
              </Column>

              <Column>
                <ColItem>2014-2015</ColItem>
                <ColItem>2013 (study abroad)</ColItem>
                <ColItem>2010-2014</ColItem>
              </Column>
            </ListGroup>
          </Row>

          <Row>
            <TitleGroup>
              <ColH1Title>Code</ColH1Title>
            </TitleGroup>

            <ListGroup>
              <GithubDiv>
                <a href="https://github.com/anniebae" target="_blank">
                  <FaGithub size={30} color='#000' />
                </a>
              </GithubDiv>
            </ListGroup>
          </Row>


          
        </BodyContainer>
      </Container>
    )
  }
}

export default Work;