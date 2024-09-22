import React from "react";
export default function ImageCard({heading,desc,src}) {
    return(
        <div className="w-[400px] h-[400px] p-[20px] flex flex-col">
            <div className="w-[150px] h-[150px] rounded-full"> <img src={src} className="w-[100%] h-[100%]"/> </div>
            <p className="text-[27px] font-bold py-[40px] text-[#3d3d3d]">{heading}</p>
            <p className="text-[#555555]">{desc}</p>
        </div>
    )
}