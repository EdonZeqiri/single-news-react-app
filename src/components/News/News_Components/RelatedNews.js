import React, {useRef} from 'react'
import './RelatedNews.css'
import Photo_Related1 from '../../../assets/photo_related-01.jpg'
import Photo_Related from '../../../assets/photo_related-02.jpg'
import gsap from 'gsap'
import {useIntersection} from 'react-use'


 function RelatedNews() {

    const relatedNewsItem = useRef(null)
    const intersection = useIntersection( relatedNewsItem, {
        root:null,
        rootMargin:'0px',
        threshold:0.5
    })
    //Related news title animation fadeIn
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
    //Related news title animation fadeOut
    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity:0,
            x:-90,
            ease:'power3.out'
        })
    }
    //Related news image animation fadeIn
    const fadeInImage = element=>{
        gsap.to(element, 1.3, {
            opacity:1,
            scale:1,
            ease:'power3.inout',
            stagger:{
                amount:0.5
                }
        })   
    }
    //Related news image animation fadeOut
    const fadeOutImage = element=>{
        gsap.to(element, 1, {
            opacity:0,
            scale:0.8,
            ease:'power3.inout'
        })
    }

    //The condition to check if user is in viewport
    if (intersection && intersection.intersectionRatio > 0.5) {
        fadeIn('.related_news_title')
        fadeInImage('.related_news_single_image')
    } else{
        fadeOut('.related_news_title')
        fadeOutImage('.related_news_single_image')
    }

    return (
        <div className='related_news_container'>
            <div className='related_news'>
                <h1 className='related_news_title'>Related News</h1>
                <div ref={relatedNewsItem}className='related_news_image_container'>
                    <div ref={relatedNewsItem} className='related_news_single_image'>
                        <img alt='' className='related_news_image_size'src={Photo_Related1}></img>
                        <p className='realted_image_date'>2018.03.11</p>
                        <p className='realted_image_title'>NZIA Public Architecture</p>
                    </div>
                    <div className='related_news_single_image'>
                        <img alt='' className='related_news_image_size'src={Photo_Related}></img>
                        <p className='realted_image_date'>2018.01.07</p>
                        <p className='realted_image_title'>Architecture Awards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RelatedNews
