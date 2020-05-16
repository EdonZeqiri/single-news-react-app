import React, {useRef} from 'react'
import Photo_Slider from '../../assets/photo_slider.jpg'
import './slider.css'
import{TweenMax,TimelineLite, Power3} from 'gsap'
import gsap from 'gsap'
import {useIntersection} from 'react-use'

function Slider (){
    const sliderItem = useRef(null)
    const intersection = useIntersection( sliderItem, {
        root:null,
        rootMargin:'0px',
        threshold:0.2
    })
    //Slider image animation fadeIn
    const fadeIn = element => {
        gsap.to(element, 1, {
            opacity:1,
            x:0,
            ease:'power3.out',
            stagger:{
                amount:0.5
                }
        })    
    }
    //Slider image animation fadeOut
    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity:0,
            x:-90,
            ease:'power3.out'
        })
    }
    //The condition to check if user is in viewport
    if (intersection && intersection.intersectionRatio > 0.2) {
            fadeIn('.slider')
    } else{
            fadeOut('.slider')
    }

    return (
            <div className='slider_container'>
                <div ref={sliderItem} className='slider'> 
                    <img class='slider_img'src={Photo_Slider}></img>
                    <h1 className='slder_title'>Open House <br/> Prishtina</h1>
                </div>
                
            </div>
        )
    }

export default Slider



// let sliderItem = useRef()
//         let tl = new TimelineLite ()

//         useEffect(()=>{
//             const sliderImage = sliderItem.firstElementChild
//             const sliderTitle = sliderItem.lastElementChild

//             TweenMax.to( sliderItem, 0 , {
//                 css:{visibility:'visible'}
//             })
            
//             tl.from(sliderImage, 1.5, {scale:1.6, ease:Power3.easeOut},'Start')
//             tl.staggerFrom(sliderTitle, 1, {left:-250, ease:Power3.easeOut, delay:.8}, .15, 'Start')


//         }, [])