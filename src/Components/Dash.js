import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'
import {connect} from 'react-redux'
class Dash extends Component{
    constructor(){
        super()
        this.state={
            products: []
        }
    }

    componentDidMount = () => {
        this.getProducts()
    }

    getProducts = () => {
        axios.get(`/api/products/${this.props.id}`)
        .then(res => {
            // console.log(res.data)
            this.setState({
                products: res.data
            })
        })
    }

    render(){
        // console.log(this.props)
        let proMap = this.state.products.map((element, index) => {
            return <Product product={element} key={index} />
        })
        return(
            <div>{proMap}</div>
        )
    }
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Dash)