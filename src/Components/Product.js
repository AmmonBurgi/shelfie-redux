import React, { Component } from 'react'

class Product extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        const {product} = this.props
        return(
            <div>
                <p>{product.name}</p>
                <img src={product.img} alt={product.name} />
                <p>{product.price}</p>
            </div>
        )
    }
}
export default Product