import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video3 from './assets/videos/video3.mp4';
import video1 from './assets/videos/video2.mp4';

export default function Main() {
    const contentRef = useRef();
    const cRef = useRef();
    const sRef = useRef();
    const c1Ref = useRef();
    const c2Ref = useRef();
    const s1Ref = useRef();
    const s2Ref = useRef();
    const univLogoRef = useRef();
    const estpRef = useRef();
    const mbtiRef = useRef();
    const font1Ref = useRef();
    const v1Ref = useRef();
    const v2Ref = useRef();
    const videoRef =useRef();
    const font7_2Ref = useRef();
    const font8Ref = useRef();


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
                start: 'top 20%', 
                end: 'bottom 20%',  // .font4를 통과하는 동안 고정됨
                pin: true,
                pinSpacing: false, 
          }
        });
      }, []);

    useEffect(() => {       // font1 move
        gsap.from('.font1-1', {
            y: 150,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,   // font1-1 이라는 className을 가진 component들끼리의 간격. 부모-자식 관계에는 성립 X
        })
    }, []);

    useEffect(() => {       // video move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.font1',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(videoRef.current, {
                y: (self.progress * -300),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  

    useEffect(() => {       // v move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.font3-3',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(v1Ref.current, {
                x: (self.progress * 1000),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  
    useEffect(() => {       // v move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.font3-3',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(v2Ref.current, {
                x: (self.progress * -1000),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  

    useEffect(() => {       // font7-2 pin
        gsap.registerPlugin(ScrollTrigger);
        const font7_2 = font7_2Ref.current;

        gsap.to(font7_2Ref.current, {
            x: -font7_2.offsetWidth,
            scrollTrigger: {
                markers: false,
                trigger: '.font7',
                start: 'top 30%', 
                end: 'bottom 30%',  // .font4를 통과하는 동안 고정됨
                scrup: 3,
                pin: true,
                pinSpacing: false, 
                onUpdate: ({ progress }) => {
                    gsap.set(font7_2, { 
                        x: -font7_2.offsetWidth * progress 
                    });
                  }
          }
        });
      }, []);

      const margin = (window.innerWidth);

    
    
    
    
    
    
    




    
      
    

 
    



    return (
        <div className='root'>

            <div className='upperBar'>
                <h1>PORTFOLIO</h1>
            </div>

                <div className='contentBackground' ref={contentRef}>

                    <video className='video1' ref={videoRef} src={video1} autoplay='autoplay' loop muted='muted' style={{width:'100%'}}></video>

                    <div className='font1' ref={font1Ref}>
                        <p className='font1-1'>FRONT-END</p>
                        <p className='font1-1'>DEVELOPER</p>
                        <p className='font1-1'>BASED IN SEOUL,</p>
                        <p className='font1-1'>SOUTH KOREA</p>
                    </div>

                    <div className='section1'>
                        {/* <img className='univLogo' src={univLogo} ref={univLogoRef} /> */}
                        <video className='univLogo' src={video3} ref={univLogoRef} autoplay='autoplay' muted loop />
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

                    <div className='tr1' style={{height:`${margin}px`}}></div>

                    


                    <div className='font3-2'>
                        <p className='font3-3' ref={v1Ref}>사람들에게 즐거움을 선사하는</p>
                        <p className='font3-4' ref={v2Ref}>개발자가 되고자 합니다</p>
                    </div>

                    


                    <div className='font4-1'>
                        <div className='font4' >
                            <p className='mbti' ref={mbtiRef}>MBTI</p>
                        </div>

                        <div className='font5-1'>
                            <p className='font6'>언제든, 어디로부터든, 어디로든. 편견없이 즐기는. 너 내 동료가 되라</p>
                            <p className='estp font5' style={{marginLeft: '50px'}} ref={estpRef}>ESTP</p>  
                        </div>
                        
                    </div>

                    <div className='font7' ref={font7_2Ref} style={{marginTop:'1000px', position:'relative'}}>
                        <p className='font7-2'><span style={{color:'#189CDE'}}>역사</span>와 <span style={{color:'#189CDE'}}>콘텐츠</span> 공부를 했습니다.<br /><br />역사와 같은 <span style={{color:'#189CDE'}}>스토리</span>들로<br />더 좋은 콘텐츠를 만들고 싶었고,<br />다양한 시도들을 해보았습니다.</p>
                        <p className='font7-3' style={{left:"1000px"}}>ABC</p>
                    </div>

                    <p className='font8' ref={font8Ref}>ABC</p>

                    

                    <div style={{height:'10000px'}}>

                    </div>
                    .

                

                </div>

            </div>
    )
} 