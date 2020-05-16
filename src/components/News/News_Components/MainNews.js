import React, {useRef} from 'react'
import './MainNews.css'
import gsap from 'gsap'
import {useIntersection} from 'react-use'

function MainNews() {
    //Ref for our element
    const mainNewsItem = useRef(null)
    //All the ref to be observed
    const intersection = useIntersection( mainNewsItem, {
        root:null,
        rootMargin:'0px',
        threshold:0.2
    })
    //Main news container animation fadeIn
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
    //Main news container animation fadeOut
    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity:0,
            y:-50,
            ease:'power3.out'
        })
    }

    //The condition to check if user is in viewport
    if (intersection && intersection.intersectionRatio > 0.2) {
        fadeIn('.main_news_container')
        
    } else{
        fadeOut('.main_news_container')
        
    }

    return (
        <div ref ={mainNewsItem} className='main_news_container'>
            <div className='main_news_left'>
                <h3 className='main_news_left_date'>02.04.2019</h3>
                <p className='main_news_left_paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. <br/> <br/>It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                <br/> <br/>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>

            <div className='main_news_right'>
                <p className='main_news_left_paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.</p>
            </div>
        </div>
    )
}

export default MainNews