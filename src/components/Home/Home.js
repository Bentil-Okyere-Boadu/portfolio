import React, { useState } from 'react'
import './Home.scss'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/logo-B.svg'
import Animate from '../AnimateTexts/Animate'

const Home = () => {
const [ letterClass, setLetterClass] = useState('text-animtate')
const nameArray = ['e', 'n', 't', 'i', 'l']
const job = 'web developer'
const jobArray = job.split('')

  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br/>I'm 
            <img src={Logo} alt='developer' /> 
            <Animate letterClass={letterClass}
            strArray={nameArray}
            idx={15}/>
            <br/>
            <Animate letterClass={letterClass}
            strArray={jobArray}
            idx={22}/>
            </h1>
            <h2>Fullstack Engineer <br/> JavaScript | React | NodeJs | Express </h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home