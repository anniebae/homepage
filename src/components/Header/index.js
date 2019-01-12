import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FaHome, FaUserCircle, FaHandPeace } from 'react-icons/fa';
import { Container } from '../Home'

const Menu = styled.ul`
  color: palevioletred;
  list-style-type: none;
  padding: 0;
  text-align: center;
`

const listItem = styled.li`
  display: inline-block;
  margin: 0 1em;
`

const Header = () => (
  <Container>
    <Menu>
      <listItem>
        <Link to="/"><FaHome /></Link>
      </listItem>
      <listItem>
        <Link to="/about"><FaUserCircle /></Link>
      </listItem>
      <listItem>
        <Link to="/contact"><FaHandPeace /></Link>
      </listItem>
    </Menu>
  </Container>
  
);

export default Header;