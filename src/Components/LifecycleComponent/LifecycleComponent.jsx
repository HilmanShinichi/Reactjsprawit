import React, { Component } from 'react'
import './LifecycleComponent.css'

class LifecycleComponent extends Component {
    constructor (props) {
        super(props);
            this.state = {
                count:1
            }
            console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
            console.log('getDeriveStateFromProps')
            return null;
    }

    componentDidMount () {
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
                count: 2
            })
        }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
  render() {
    console.log('render')
    return (
    <button className='btnlife'>Component Button {this.state.count}</button>
    )
  }
}
export default  LifecycleComponent;