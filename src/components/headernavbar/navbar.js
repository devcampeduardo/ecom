import React, { Component } from 'react';

import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                {
                    this.props.headerLinks.map((link, index) => {
                       return (
                           <a className='navbar__link' key={index} onClick={() => console.log('trying to switch tab')}>
                               {link.title}
                           </a>
                       ) 
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;