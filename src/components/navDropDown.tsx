"use client";
import { useState } from "react";
import Link from 'next/link';



export default function NavDropDown(props: {isOpen : boolean}){
    const labels = ['Home', 'My Profile', 'Community', 'Sign Out'];
    const links = ['/', '/profile-page/1', '/community', '/sign-out'];

    return (
    <div className="max-width-sm cursor-pointer flex justify-end">
        {props.isOpen && (
            <ul className="absolute z-50 rounded-md background-pdark w-[200px]">
                {labels.map((label, index)=>
                    <li key={index} className="px-4 py-2 background-pdark rounded-md nav-link"><Link href={links[index]}>{label}</Link></li>
                )}
                
            </ul>
        )}
    </div>
    );
}