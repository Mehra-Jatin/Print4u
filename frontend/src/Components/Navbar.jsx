import React from "react";
import Button from "./Utility/Button";
export default function Navbar() {
    return (
        <div className=" px-[40px] lg:px-[120px] w-[100vw] h-[80px] shadow-sm shadow-[#d3d3d3] flex justify-between text-[15px] lg:text-[17px] font-[500]  items-center">
            <ul className="px-[50px]  text-[#4B77BE]">
                <li className="text-[25px] lg:text-[40px] font-bold">Print4u</li>
            </ul>
            <ul className=" px-[20px] lg:px-[80px] flex items-center  ">
                <li className="px-[20px] lg:px-[30px] cursor-pointer">Catalog</li>
                <li className="px-[20px] lg:px-[30px] cursor-pointer">Blog</li>
                <li className="px-[20px] lg:px-[30px] cursor-pointer">Services</li>
                <li className="w-[90px] lg:w-[100%]  px-[10px] lg:px-[20px]  cursor-pointer">Use-Cases</li>

            </ul>

            <ul className=" px-[0px] lg:px-[20px] flex items-center">
                <li className=" px-[5px] lg:px-[20px] w-[100px] lg:w-[auto] cursor-pointer"><Button text="Log in" bg="white" fontcolor="black" /></li>
                <li className=" px-[5px] lg:px-[20px] w-[100px] lg:w-[auto] cursor-pointer"><Button text="Sign Up" bg="#4B77BE" fontcolor="white" /></li>
            </ul>
        </div>
    )
}