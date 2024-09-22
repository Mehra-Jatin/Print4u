import React from "react";

export default function Button({text,bg,fontcolor}){
    return(
       <div className="cursor-pointer px-[20px] h-[40px]   rounded-[4px] flex items-center justify-center border-[#b9b9b9] font-[500]" style={{backgroundColor:bg,borderWidth:"0.2px",color:fontcolor}}>
            <p>{text}</p>
        </div>
   
    )
}