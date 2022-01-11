import React, { Component } from "react";

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopProduct from "./shopProduct";
import ShopSearchBar from "./shopSearchBar";
import ShopCart from "./shopCart";

import CartButton from "./cartButton";

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

        this.props.fetchShopProducts();
    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true
    }

    onSubmit = (fields) => {
        this.props.filterProductsWithQuery(fields)
    }

    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }
  
    render() {
        //return <ShopCart className='shop__cart'/>
        return (
            <div className='shop'>
                <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar'/>
                <div className='shop__products'>
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <ShopProduct {...product} key={product._id} />
                            )
                        })
                    }
                </div>
                
                    this.state.shopCart ? <ShopCart className='shop__cart'/> : ''
        
               <CartButton onClick={this.handleAddToCart} className='shop__cart-button' icon='fas fa-cart-plus'/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { categories, filteredProducts } = state.shop;
    return {
        categories,
        filteredProducts
    } 
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;