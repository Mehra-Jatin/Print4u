import React from "react";
import Button from "./Utility/Button";

export default function Navbar() {
    return (
        <div className="px-20 lg:px-[120px] w-full h-[80px]  shadow-sm shadow-[#d3d3d3] flex justify-between items-center text-[15px] lg:text-[17px] font-[500]">
            <ul className="px-2 lg:px-[50px] text-[#4B77BE]">
                <li className="text-[25px] lg:text-[40px] font-bold">Print4u</li>
            </ul>
            <ul className="px-4 lg:px-[80px] flex items-center space-x-4 lg:space-x-8">
                <li className="cursor-pointer">Catalog</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Use-Cases</li>
            </ul>

            <ul className="px-2 lg:px-[20px] flex items-center space-x-2 lg:space-x-4">
                <li className="cursor-pointer">
                    <Button text="Log in" bg="white" fontcolor="black" />
                </li>
                <li className="cursor-pointer">
                    <Button text="Sign Up" bg="#4B77BE" fontcolor="white" />
                </li>
            </ul>
        </div>
    );
}
