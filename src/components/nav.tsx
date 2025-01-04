"use client";
import { useState } from "react";
import NavDropDown from '@/components/navDropDown';
import Image from "next/image";

export default function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    
        function toggleDropDown(){
            setIsOpen(!isOpen);
        }

    return (
    <>
        <div className="p-4 max-w-m mx-auto background-pdark flex justify-between nav-container">
            <Image src="/cs_pixel_title_dark.png" width={384} height={57} alt="creative-share-logo" className="nav-img"></Image>
            <div className="max-width-sm cursor-pointer">
                <img src="/menu_48.png" onClick={toggleDropDown} className="w-12 h-12 rounded-md hover:border-solid hover:border-2 hover:border-pwhite">
                </img> 
                <NavDropDown isOpen={isOpen}></NavDropDown>
            </div>
        </div>
        
    </>
    );
}