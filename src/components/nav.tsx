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
        <div className="p-4 max-w-m mx-auto bg-white rounded-xl shadow-md flex justify-between nav-container">
            <Image src="/cs_pixel_title_blacklg.png" width={384} height={57} alt="creative-share-logo" className="nav-img"></Image>
            <div className="max-width-sm cursor-pointer">
                <div onClick={toggleDropDown} className="bg-[url('/cs_dropdown.png')] hover:bg-[url('/cs_dropdown_hover.png')] bg-cover w-16 h-16">
                </div> 
            </div>
        </div>
        <NavDropDown isOpen={isOpen}></NavDropDown>
    </>
    );
}