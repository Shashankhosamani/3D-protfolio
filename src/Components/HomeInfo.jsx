import { render } from '@react-three/fiber'
import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text} </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent={
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am 
            <span className='font-semibold'> Shashank</span> 👋
            <br/>
            A Software engg from India
        </h1>
    ),
    2: (
        <InfoBox
        text="Worked with my FrameWorks and Tools"
        link="/about"
        btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="Done MUltiple Projects Working with Many tools And Frame Works"
            link="/Projects"
            btnText="Visit MY Portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Looking For a Dev to Build Project ? I'm few key Stokes Away"
            link="/Contact"
            btnText="Let's Talk"
        />
    ),

}


    

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage]|| null;
}

export default HomeInfo