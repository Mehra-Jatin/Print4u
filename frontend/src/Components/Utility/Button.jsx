import React from "react";

export default function Button({text,bg,fontcolor}){
    return(
       <div className=" cursor-pointer px-[20px] sm:px-[0px] h-[40px] sm:h-[30px]  rounded-[4px] flex items-center justify-center border-[#b9b9b9] font-[500] sm:font-[450] border-[1.2px]" style={{backgroundColor:bg,color:fontcolor}}>
            <p>{text}</p>
        </div>
   
    )
}