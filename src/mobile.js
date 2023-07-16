import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video3 from './assets/videos/video3.mp4';
import video1 from './assets/videos/video2.mp4';
import video4 from './assets/videos/video1.mp4';
import video5 from './assets/videos/video5.mp4';
import video6 from './assets/videos/video6.mp4';
import shot1 from './assets/images/shot1.png';
import shot2 from './assets/images/shot2.png';
import shot3 from './assets/images/shot3.png';
import shot4 from './assets/images/shot4.png';
import video1_shot from './assets/images/video1.png';
import './mobile.css';

export default function Mobile() {

    const screenHeight = window.innerHeight;

    return (
        <div className='root_m'>
            <img className='video1_m' src={video1_shot} />
            <div className='font1_m'>
                <p className='font1-2_m'>FRONT-END</p>
                <p className='font1-2_m'>DEVELOPER</p>
                <p className='font1-2_m'>BASED IN SEOUL,</p>
                <p className='font1-2_m'>SOUTH KOREA</p>
            </div>


            <div></div>
        </div>
    )
}