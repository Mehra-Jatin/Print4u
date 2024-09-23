import React from 'react';
import { Navbar, ImageCard, Button, Footer } from './Components';
import './App.css';
import Lottie from "lottie-react";
import shopping from "./shopping.json";
import printmachine from "./printmachine.json";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />

      {/* Page 1 */}
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center py-10">
        <div className="w-full  flex flex-col justify-center px-8 md:px-20 lg:px-[200px]">
          <p className="text-[40px]  lg:text-[60px] font-bold">Create and Sell</p>
          <p className="text-[40px]  lg:text-[60px] font-bold">custom products</p>
          <ul className="font-medium text-[#8f8f8f] py-5 px-5 md:px-10">
            <li>✔️ 100% Free to use</li>
            <li>✔️ 900+ High-Quality Products</li>
            <li>✔️ Largest global print network</li>
          </ul>
          <ul className="flex text-sm py-5">
            <li className="px-2"><Button text="Start for free" bg="#4B77BE" fontcolor="white" /></li>
            <li className="px-2"><Button text="How it works?" bg="white" /></li>
          </ul>
          <p className="font-medium text-[#4B77BE] text-sm px-2">Trusted by over 8M sellers around the world</p>
        </div>

        {/* Page 1 gif */}
        <div className="w-full h-auto flex items-center justify-center ">
          <Lottie className="w-[60%] " animationData={shopping} />
        </div>
      </div>

      {/* Page 2 */}
      <ul className="flex flex-col lg:flex-row justify-center items-center w-full h-auto py-10 ">
        <li><ImageCard heading="Higher Profits" desc="We offer some of the lowest prices in the industry because print providers continuously compete to win your business." src="higher-profits.svg" /></li>
        <li><ImageCard heading="Robust Scaling" desc="Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality." src="robust-scaling.svg" /></li>
        <li><ImageCard heading="Best Selection" desc="With 900+ products and top quality brands, you can choose the best products for your business." src="best-selection.svg" /></li>
      </ul>

      {/* Page 3 */}
      <div className="w-full h-auto bg-[#f7f7f7] flex flex-col lg:flex-row items-center justify-center py-10">
        {/* Page 3 gif */}
        <div className="w-full lg:w-[50%] h-auto flex items-center justify-center">
          <Lottie className="w-full" animationData={printmachine} />
        </div>

        {/* Page 3 text */}
        <div className="w-full lg:w-[50%] h-auto  flex flex-col justify-center px-[150px] ">
          <p className="text-[20px] md:text-[30px] font-medium">Easily add your design to a</p>
          <p className="text-[20px] md:text-[30px] font-medium">wide range of products</p>
          <div className="py-5 text-sm text-[#afafaf]">
            <p>With our free design tools, you can easily add your</p>
            <p>custom designs to t-shirts, mugs, phone cases, and</p>
            <p>hundreds of other products.</p>
          </div>
          <p className="text-sm font-medium text-[#4B77BE]">All Products ➡️</p>
        </div>
      </div>

      {/* Page 4 */}
      <ul className="w-full h-auto flex flex-col lg:flex-row items-center justify-center py-10 ">
        <li><ImageCard heading="Custom products" desc="Easily add your designs to a wide range of products using our free tools" src="custom-products.webp" /></li>
        <li><ImageCard heading="SELL" desc="You choose the products sale price and where to sell" src="your-products.webp" /></li>
        <li><ImageCard heading="WE HANDLE" desc="Once an order is placed we automatically handle all the printing and delivery logistics" src="fullfillment.webp" /></li>
      </ul>

      <Footer />
      {/* End */}
    </div>
  );
}

export default App;
