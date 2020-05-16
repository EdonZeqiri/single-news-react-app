import React ,{useRef} from 'react'
import './SocialMediaBar.css'
import gsap from 'gsap'
import {useIntersection} from 'react-use'


export default function SocialMediaBar() {
    const socialMediaBarItem = useRef(null)
    const intersection = useIntersection( socialMediaBarItem, {
        root:null,
        rootMargin:'0px',
        threshold:0.9
    })

    const fadeIn = element => {
        gsap.to(element, 1, {
            opacity:1,
            y:0,
            ease:'power3.out',
            stagger:{
            amount:0.5
            }
        })    
    }
    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity:0,
            y:-10,
            ease:'power3.out'
        })
    }
    const fadeInHr = element =>{
        gsap.to(element,1, {
            opacity:1,
            scale:1,
            ease:'power3.out',
        }
        )
    }
    const fadeOutHr = element =>{
        gsap.to(element,1, {
            opacity:0,
            scale:.6,
            ease:'power3.out',
        }
        )
    }

    if (intersection && intersection.intersectionRatio > 0.9) {
        fadeIn('.social_media_bar')
        fadeInHr('.social_media_hr')
    } else{
        fadeOut('.social_media_bar')
        fadeOutHr('.social_media_hr')
    }

    return (
        <div className='social_media_bar_container' ref={socialMediaBarItem}>
            <div className='social_media_bar'>
                <h4 class='social_media_bar_h4' >Facebook</h4> <h4>Instagram</h4> <h4>Youtube</h4>
            </div>
            <div className='social_media_hr'>
                <hr ></hr>
            </div>
        </div>
    )
}
