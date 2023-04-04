import React, { Component } from "react";
import YoutubeComp from "../../Components/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";
import LifecycleComponent from "../../Components/LifecycleComponent/LifecycleComponent";

export class Home extends Component {
  render() {
    return (
      <div>
        {/* <p>Youtube Component</p>
        <hr />
        <YoutubeComp time="8.13" title="Belajar React JS" desc="2x ditonton. 2 hari yang lalu"/>
        <YoutubeComp time="9.03" title="Belajar Javascript" desc="4x ditonton. 4 hari yang lalu"/>
        <YoutubeComp time="5.33" title="Belajar PHP" desc="10x ditonton. 3 hari yang lalu"/>
        <YoutubeComp time="4.07" title="Belajar NodeJS" desc="8x ditonton. 6 hari yang lalu"/>
        <YoutubeComp /> */}
        {/* <p>Counter</p>
        <hr />
        <Product/> */}
        <p>Lifecycle Component</p>
        <hr />
        <LifecycleComponent/>
      </div>
    );
  }
}

export default Home;
