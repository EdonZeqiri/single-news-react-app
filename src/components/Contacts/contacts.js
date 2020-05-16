import React, { useRef } from 'react'
import './contacts.css'
import gsap from 'gsap'
import {useIntersection} from 'react-use'

function Contacts() {
    const contactsItem = useRef(null)
    const intersection = useIntersection( contactsItem, {
        root:null,
        rootMargin:'0px',
        threshold:0.8
    })
    //Contact container left animation fadeIn
    const fadeInLeft = element => {
        gsap.to(element, 1, {
            opacity:1,
            x:0,
            ease:'power3.out',
            stagger:{
            amount:0.5
            }
        })    
    }
    //Contact container left animation fadeout
    const fadeOutLeft = element => {
        gsap.to(element, 1, {
            opacity:0,
            x:-20,
            ease:'power3.out'
        })
    }
    //Contact container right animation fadein
    const fadeInRight = element=>{
        gsap.to(element, 1.3, {
            opacity:1,
            x:0,
            ease:'power3.inout',
            stagger:{
            amount:0.5
            }
        })   
    }
    //Contact container right animation fadeout
    const fadeOutRight = element=>{
        gsap.to(element, 1, {
            opacity:0,
            scale:0.8,
            x:20,
            ease:'power3.inout'
        })
    }
    //The condition to check if user is in viewport
    if (intersection && intersection.intersectionRatio > 0.8) {
        fadeInLeft('.contacts_container_left')
        fadeInRight('.contacts_container_right')
    } else{
        fadeOutLeft('.contacts_container_left')
        fadeOutRight('.contacts_container_right')
    }

    return (
        <div className='contacts_container'>
            
            <div ref={contactsItem}className='contacts_container_left'>
                <div className='contacts_paragraphs'>
                    <p className='contacts_p1'>Contact</p> <p className='contacts_p2'>Us</p>
                </div>
                <div className='contacts_info'>
                    <p className='contacts_info_dscp'>Str. Ahmet Krasniqi, Arberia</p> 
                    <p className='contacts_info_dscp'>10000 Pristina, Kosovo</p> 
                    <p className='contacts_info_dscp'>+383 44 123 456</p> 
                    <p className='contacts_info_dscp'>info@archides.com</p> 
                </div>
                <div className='contacts_map'>
                    <p className='contacts_view_map'>View on map</p>
                </div>
            </div>
            
            <div ref={contactsItem} className='contacts_container_right'>
                <div className='contacts_paragraphs'>
                        <p className='contacts_p1'>Follow</p> <p className='contacts_p2'>Us</p>
                </div>
                <div className='contacts_info'>
                    <a href='https://www.facebook.com/' className='contacts_info_sm'>Facebook</a> 
                    <a href='https://www.facebook.com/' className='contacts_info_sm'>Instagram</a> 
                    <a href='https://www.facebook.com/'className='contacts_info_sm'>Youtube</a> 
                </div>
                <div className='contacts_follow'>
                    <p className='contacts_follow'>archides @2018</p>
                </div>
            </div>
        </div>
        )
    }


export default Contacts
