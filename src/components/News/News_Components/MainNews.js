import React, {useRef} from 'react'
import './MainNews.css'
import gsap from 'gsap'
import {useIntersection} from 'react-use'

export default function MainNews() {
    const mainNewsItem = useRef(null)
    const intersection = useIntersection( mainNewsItem, {
        root:null,
        rootMargin:'0px',
        threshold:0.3
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
            y:-50,
            ease:'power3.out'
        })
    }

   

    if (intersection && intersection.intersectionRatio > 0.3) {
        fadeIn('.main_news_container')
        
    } else{
        fadeOut('.main_news_container')
        
    }

    return (
        <div ref ={mainNewsItem} className='main_news_container'>
            <div className='main_news_left'>
                <h3>02.04.2019</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. <br/> <br/>It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                <br/> <br/>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>

            <div className='main_news_right'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.</p>
            </div>
        </div>
    )
}
