import React from 'react';
import './App.css';
import Header from './components/Header/header'
import Slider from './components/Slider/slider'
import News from './components/News/news'
import Contacts from './components/Contacts/contacts'
import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Slider />
        <News/>
        <Contacts/>
      </div>
    </BrowserRouter>
  );
}

export default App;
