import React, { Component, Fragment } from "react";
import "./Product.css";

export class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            order: 4,
            name:'hilman'
        }
    }
    
    

handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        })
    }

handleMinus = () => {
    this.setState({
        order: this.state.order - 1
    })
    if(this.state.order <= 1){
        this.setState({
            order: this.state.order = 1
        })
    }
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
          <div className="card-product">
            <div className="img-thumb-prod">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Ayam_bakar_Aie_Badarun.JPG/400px-Ayam_bakar_Aie_Badarun.JPG"
                alt=""
              />
            </div>
            <p className="product-title">Daging Ayam Bumbu</p>
            <p className="product-price">Rp 410,000</p>
            <div className="counter">
              <button className="minus" onClick={this.handleMinus}>-</button>
              <input type="text" value={this.state.order} />
              <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
          </div>
        
      </Fragment>
    );
  }
}

export default Product;
