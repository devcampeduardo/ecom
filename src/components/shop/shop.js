import React, { Component } from "react";

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount() {
        
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        // fetch shop prodcuts action creator
        // set the header links
        // set the navbar links
    }
  
    render() {
        return (
            <div className="shop">
                {/* shop search bar */}
                {/* shop product */}
                {/* shop cart button */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;