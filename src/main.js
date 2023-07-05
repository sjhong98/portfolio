import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import univLogo from './assets/images/univLogo3.jpg';
import video1 from './assets/videos/video3.h264';

export default function Main() {
    const cRef = useRef();
    const sRef = useRef();
    const c1Ref = useRef();
    const c2Ref = useRef();
    const s1Ref = useRef();
    const s2Ref = useRef();
    const univLogoRef = useRef();
    const estpRef = useRef();
    const mbtiRef = useRef();


    useEffect(() => {       // "c1 move"
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.tr1',
        start: 'top 95%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 750px',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(c1Ref.current, {
                opacity: (self.progress),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  
    useEffect(() => {       // "c2 move"
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.tr1',
        start: 'top 95%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 750px',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(c2Ref.current, {
                opacity: (self.progress),  // opacity 0->1
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  
    useEffect(() => {       // "s1 move"
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.tr1',
        start: 'top 95%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 750px',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(s1Ref.current, {
                opacity: (self.progress),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  
    useEffect(() => {       // "s2 move"
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.tr1',
        start: 'top 95%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 750px',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(s2Ref.current, {
                opacity: (self.progress),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  

    useEffect(() => {       // univLogo move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.section1',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(univLogoRef.current, {
                y: (self.progress * -300),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  

    useEffect(() => {       // mbti pin
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(mbtiRef.current, {
            scrollTrigger: {
                markers: false,
                trigger: '.font4',
                start: 'top 40%', 
                end: 'bottom 40%',  // .font4를 통과하는 동안 고정됨
                pin: true,
                pinSpacing: false, 
          }
        });
      }, []);


    
      




    return (
        <div className='root' >

            <div className='upperBar'>
                <h1>PORTFOLIO</h1>
            </div>

            <div className='content'>

                <div className='font1'>
                    <p>FRONT-END<br/>DEVELOPER<br/>BASED IN SEOUL,<br/>SOUTH KOREA</p>
                </div>

                <div className='section1'>
                    <img className='univLogo' src={univLogo} ref={univLogoRef} />
                    <div className='font2'>
                            <p>MAJOR IN</p>
                            <div className='font2-1'>
                                <p className='font3'>H</p>
                                <p className='font3 font3-1' ref={c1Ref}>ISTORY</p>
                                <p className='font3' ref={cRef} style={{marginLeft:'30px'}}>C</p>
                                <p className='font3 font3-1' ref={c2Ref}>ONTENTS &</p>
                            </div>
                            <div className='font2-2'>
                                <p className='font3'>C</p>
                                <p className='font3 font3-1' ref={s1Ref}>OMPUTER</p>
                                <p className='font3 S' ref={sRef} style={{marginLeft:'30px'}}>S</p>
                                <p className='font3 font3-1' ref={s2Ref}>CIENCE</p>
                            </div>
                    </div>
                </div>

                <div className='tr1' style={{height:'1px'}}></div>

                <div>
                    <div className='font4' >
                        <p className='mbti' ref={mbtiRef}>MBTI</p>
                    </div>
                    <div className='font5'>
                        <p className='estp' style={{marginLeft: '50px'}} ref={estpRef}>ESTP</p>  
                    </div>
                </div>

                <div className='font6'>
                    <div>
                        <p>노는게 제일 좋아</p>
                    </div>
                    <div>
                        <p>여행가고 싶다</p>
                    </div>
                </div>


                

                <div style={{height: '1000px'}}>
                </div>

                

            </div>

        </div>
    )
} 