import React, { Component } from 'react'
import './header.css';
import {Link} from 'react-router-dom'

export class Header extends Component {
    constructor(){
        super()
        this.state={
            isOpen:false,
            navLinks:false
        }
    }
//Function to check is hamburger menu clicked for Responsive
    handleClickNav=()=> {
        this.setState({isOpen:!this.state.isOpen})
    }
// Function for li animation after hamburger menu is clicked
    handleNavLinks = () =>{
        if(this.state.isOpen===true){
            this.setState({navLinks:!this.state.navLinks})
        }
    }

    render() {
        console.log(this.state.isOpen)
        return (
            
            <div className='header'>
                 <nav>
                    <div onClick={this.handleClickNav} className={(this.state.isOpen === true ? 'open_hamburger ':'hamburger')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={(this.state.isOpen === true ? 'nav-links open ':'nav-links')}>
                     <Link to={`/`} style={{ textDecoration: 'none' }}><li className={(typeof this.state.navLinks == true ? 'fade':'li_1')}>Projects</li></Link> 
                     <Link to={`/`} style={{ textDecoration: 'none' }}><li className={(typeof this.state.navLinks == true ? 'fade':'li_2')}>Services</li></Link> 
                     <Link to={`/`} style={{ textDecoration: 'none' }}><li className={(typeof this.state.navLinks == true ? 'fade':'li_3')}>About</li></Link> 
                     <Link to={`/`} style={{ textDecoration: 'none' }}><li className={(typeof this.state.navLinks == true ? 'fade':'li_4')}>News</li></Link> 
                     <Link to={`/`} style={{ textDecoration: 'none' }}><li className={(typeof this.state.navLinks == true ? 'fade':'li_5')}>Contact</li></Link> 
                    </ul>
                </nav>
            </div>
            
        )
    }
}

export default Header
