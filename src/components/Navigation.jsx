import React, {Component} from 'react';
import logo from '../logo.png';
import styled from 'styled-components';

const Nav = styled.nav `
display: flex;
align-items: center;
padding: 20px;
`
const Navlist = styled.ul `
list-style: none;
margin: 0 -10px;
margin-left: auto;
`
const Navitem = styled.li `
display: inline;
margin: 0 10px;
align-items: center;
`
const Link = styled.a `
color: #fff;
text-decoration: none;
font-size: 14px;
font-weight: 700;
`
const Logo = styled.img `
height: 70px;
width: 202.53px;
`

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Logo src = { logo } alt = "logo" / >
 <Navlist>
   <Navitem> <Link href="#">NL</Link></Navitem>
   <Navitem> <Link href="#">FR</Link></Navitem>
   <Navitem> <Link href="#">EN</Link></Navitem>
 </Navlist>
      </Nav>
)
  }
}

export default Navigation;