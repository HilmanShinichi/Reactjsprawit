import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

export class Product extends Component {
    
        
        state = {
            order: 4,
            name:'hilman'
        }
    
    
handleCounterChange = (newValue) => {
      this.setState({
        order:newValue
      })
    }

  render() {
    return (
      <Fragment>
        <div className="header-product">
          <div className="logo-product">
            <img src="https://www.names.co.uk/blog/wp-content/uploads/2018/05/dotSTORE.png" alt="" />
          </div>
          <div className="troley">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
              alt=""
            />
            <div className="count">{this.state.order}</div>
          </div>
          </div>
         <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
      </Fragment>
    );
  }
}

export default Product;
