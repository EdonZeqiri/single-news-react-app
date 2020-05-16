import React, { Component } from 'react'
import MainNews from './News_Components/MainNews'
import SodialMediaBar from './News_Components/SocialMediaBar'
import RelatedNews from './News_Components/RelatedNews'
import './news.css'

export class News extends Component {
    render() {
        return (
           <div className='news_container'>
                <div className='news'>
                    <MainNews/>
                    <SodialMediaBar/>
                </div>
                    <RelatedNews/>
            </div> 
        )
    }
}

export default News
