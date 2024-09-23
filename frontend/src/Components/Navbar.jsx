import React from "react";
import Button from "./Utility/Button";
export default function Navbar() {
    return (
        <div className=" px-[100px] sm:px-[0px] w-[100vw] h-[80px] shadow-sm shadow-[#d3d3d3] flex justify-between text-[17px] font-normal items-center">
            <ul className="px-[50px] sm:px-[5px] text-[#4B77BE]">
                <li className="text-[30px] font-bold">Print4u</li>
            </ul>
            <ul className="px-[20px] flex items-center ">
                <li className="px-[20px] cursor-pointer">Catalog</li>
                <li className="px-[20px] cursor-pointer">Blog</li>
                <li className="px-[20px] cursor-pointer">Services</li>
                <li className="px-[20px] cursor-pointer">Use-Cases</li>

            </ul>

            <ul className="px-[20px]  flex items-center">
                <li className="px-[10px] sm:px-[0px] cursor-pointer"><Button text="Log in" bg="white" fontcolor="black" /></li>
                <li className="px-[10px]  cursor-pointer"><Button text="Sign Up" bg="#4B77BE" fontcolor="white" /></li>
            </ul>
        </div>
    )
}