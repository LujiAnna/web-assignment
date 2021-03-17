import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Cta from './Cta';
import Button from './Button';
import Icon from './Icon';
import phone from '../assets/phone_screen.png';
import partners from '../assets/phone_screen.png'

const Section = styled.div `
background-color:#FFE885;
display: flex;
flex-direction: column;
justify-content: center;
/* vertical-align: center; */
color: #003D67;
border-radius: 5px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
font-style: normal;
font-weight: 500;
line-height: 31.88px;
height: 600px;
width: 520px;
opacity: 0.9;
margin-top: 20px;
/* position: relative; */
`

const Banner = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
`

const SectionBusiness = styled(Section) `
background-color: #fff;
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
`

const Content = () => {
  return (
    <Banner>
 <Section>
      <Category text={'For consumers'}/>
      <Cta text={'Install the Stampix App and order prints in just a few clicks'}/>
      <Button text={'Start printing'} link={"https://stampix.com"} ></Button>
      <Icon source={phone} alt='phone'/>
    </Section>
    <SectionBusiness>
      <Category text={'For business'}/>
      <Cta text={'Build emotional loyalty and brand engagement'}/>
      <Button text={'Stampix for Business'} link = {"https://business.stampix.com"}></Button>
      <Icon source={partners}/>
    </SectionBusiness>
    </Banner>
  );
}

export default Content;

