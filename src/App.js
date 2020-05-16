import React from 'react';
import './App.css';
import Header from './components/Header/header'
import Slider from './components/Slider/slider'
import News from './components/News/news'
import Contacts from './components/Contacts/contacts'
import {TweenMax, Power3} from 'gsap'

function App() {
  return (
    <div className="app">
      <Header/>
      <Slider />
      <News/>
      <Contacts/>
    </div>
  );
}

export default App;
