import React, { Component } from "react";


export class CardProduct extends Component {
    
       
        state = {
            order: 3,
            name:'hilman'
        }
    
    
        handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
}
    

handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })

        
    }

handleMinus = () => {
    this.setState({
        order: this.state.order - 1
    })
    if(this.state.order <= 1){
        this.setState({
            order: this.state.order = 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }
}
  render() {
    return (
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
    );
  }
}

export default CardProduct;
