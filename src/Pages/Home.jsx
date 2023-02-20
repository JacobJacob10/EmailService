import React from 'react';

import main_photo from '../assets/images/image_summer.png'
import NavBar from '../components/NavBar';
import '../style/home.css'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BeforeEmail from '../components/BeforeEmail';
import AfterEmail from '../components/AfterEmail';


export default function Home(){
    return(
        <>
        <div className='container'>
        <NavBar/>
            <div className='leftside'>
                

                <Router>
                    <Routes>
                        <Route path='/' element={<BeforeEmail/>} />
                        <Route path='*' element={<AfterEmail/>}/>
                    </Routes>
                </Router>

            </div>
            
            <div className="rightside">
                <img className='backgroud-img' src={main_photo} alt='backgroud'/>
            </div>

        </div>
        </>
    )
}