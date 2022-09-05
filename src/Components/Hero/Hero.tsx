// import { useState } from "react";
import './Hero.scss';
import Button from "../Button/Button";

const Hero = () => {

  return (
    <div className='hero-container'>
      <div className="grid grid-cols-3 gap-6 h-full">
        <div className="col-span-2 border-r-2 border-light-grey"></div>
        <div className="hero-text">
          <h1 className="text-white font-header text-5xl">discover beautiful <br/> handcrafted <br/> dice sets.</h1>
          <Button primary text="shop now" onClick={() => console.log("shop now has been clicked")}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;