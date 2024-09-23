import React from "react";

export default function Button({text,bg,fontcolor}){
    return(
       <div className=" cursor-pointer px-[5px]  lg:px-[20px] h-[40px]   rounded-[4px] flex items-center justify-center border-[#b9b9b9] font-[500]  border-[1.2px]" style={{backgroundColor:bg,color:fontcolor}}>
            <p>{text}</p>
        </div>
   
    )
}