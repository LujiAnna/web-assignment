import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Cta from './Cta';
import Button from './Button';
import Icon from './Icon';
import phone from '../assets/phone_screen.png';
// pass partners as different Icons as well
import partners from '../assets/playmobile.png'
import px2vw from '../utils/px2vw';


const Banner = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
/* one-line */
flex-wrap: wrap;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    /* multi-lines */
    flex-wrap: nowrap;
    /* flex-direction: column; */
  }
`

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
/* margin-top: 20px; */
position: relative;
overflow-y: hidden;
padding: ${px2vw(20)};


/* width: ${px2vw(320, 320)}; */
  /* min-height: ${px2vw(200, 320)}; */
  /* margin: ${px2vw(20)}; */
  /* height: 100%; */

}

  /* width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  } */

`

const SectionBusiness = styled(Section) `
background-color: #fff;
border-radius: 5px;
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
`

const ContentNL = () => {
  return (
    <>

<Banner lang='nl'>
<Section data-key='section-customer'>
     <Category text={'Voor consumenten'}/>
     <Cta text={'Installeer de Stampix-app en bestel afdrukken in slechts een paar klikken'}/>
     <Button text={'Begin met afdrukken'} link={"https://stampix.com"} ></Button>
     <Icon source={phone} alt='phone'/>
   </Section>
   <SectionBusiness data-key='section-business'>
     <Category text={'Voor zaken'}/>
     <Cta text={'Bouw emotionele loyaliteit en merkbetrokkenheid op'}/>
     <Button text={'Stampix voor bedrijven'} link = {"https://business.stampix.com"}></Button>
     <Icon source={partners} alt='partners'/>
   </SectionBusiness>
   </Banner>
   </>

  );
}

export default ContentNL;

