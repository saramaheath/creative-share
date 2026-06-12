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
        <div className="p-4 max-w-m mx-auto background-accent-light flex justify-between nav-container">
            <Image src="/cs_pixel_title_dark.png" width={384} height={57} alt="creative-share-logo" className="nav-img"></Image>
            {/* <div className="hidden md:flex flex-row gap-4 items-center w-1/2">
                <div className="custom-button text-center rounded-sm w-1/3 py-2">
                    <a href="/community" className="nav-link text-xs px-2">Community</a>
                </div>
                <div className="custom-button text-center rounded-sm w-1/3 py-2">
                    <a href="/profile-page/1" className="nav-link text-xs px-2">Profile</a>
                </div>
                <div className="custom-button text-center rounded-sm w-1/3 py-2">
                    <a href="/auth/logout" className="nav-link text-xs px-2">Sign Out</a>
                </div>
            </div> */}
            <div className="max-width-sm cursor-pointer">
                <img src="/menu_48.png" onClick={toggleDropDown} className="w-12 h-12 rounded-sm">
                </img> 
                <NavDropDown isOpen={isOpen}></NavDropDown>
            </div>
        </div>
        
    </>
    );
}