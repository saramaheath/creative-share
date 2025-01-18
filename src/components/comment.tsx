"use client";
import { useState } from "react";
import Image from "next/image";

export default function Comment(){
    
    return (
        <div className="p-2">
            <div className="flex flex-row mb-2">
                <p className="text-xs font-semibold">SixTeeth</p>
                <p className="text-xs font-normal pl-2">1 month ago</p>
            </div>
           <p className="text-xs font-normal mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
           <div className="flex flex-row justify-between">
            <div className="m-2 border rounded-md border-pdark cursor-pointer text-center text-xs w-1/4 hover:bg-slate-400 hover:text-white">Reply</div>
            <div className="m-2 border rounded-md border-pdark cursor-pointer text-center text-xs w-1/4 hover:bg-slate-400 hover:text-white">Delete</div>
           </div>
        </div>
        
    )
}