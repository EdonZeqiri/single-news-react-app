import React, { Component } from 'react'
import './header.css';

export class Header extends Component {
    constructor(){
        super()
        this.state={
            isOpen:true,
            navLinks:false
        }
    }

    handleClickNav=()=> {
        this.setState({isOpen:!this.state.isOpen})
        console.log(this.state.isOpen)
    }
    
    handleNavLinks = () =>{
        if(this.state.isOpen===true){
            this.setState({navLinks:!this.state.navLinks})
        }
    }

    render() {
        return (
            
            <div className='header'>
                 <nav>
                    <div onClick={this.handleClickNav} 
                    className='hamburger'>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className={(this.state.isOpen == false ? 'nav-links open ':'nav-links')}>
                        <li className={(typeof this.state.navLinks == true ? 'fade':'li_1')}>Projects</li>
                        <li className={(typeof this.state.navLinks == true ? 'fade':'li_2')}>Services</li>
                        <li className={(typeof this.state.navLinks == true ? 'fade':'li_3')}>About</li>
                        <li className={(typeof this.state.navLinks == true ? 'fade':'li_4')}>News</li>
                        <li className={(typeof this.state.navLinks == true ? 'fade':'li_5')}>Contact</li>
                    </ul>
                </nav>
            </div>
            
        )
    }
}

export default Header
