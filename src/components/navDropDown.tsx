"use client";
import { useState } from "react";
import Link from 'next/link';



export default function NavDropDown(props: {isOpen : boolean}){
    const labels = ['My Profile', 'Community', 'Sign Out'];
    const links = ['/profile-page/1', '/community', '/sign-out'];

    return (
    <div className="max-width-sm cursor-pointer flex justify-end">
        {props.isOpen && (
            <ul className="absolute z-50 border-solid border-2 border-white-500 rounded-md bg-orange-950 w-[200px]">
                {labels.map((label, index)=>
                    <li key={index} className="px-4 py-2 bg-orange-950 hover:bg-orange-900 rounded-md"><Link href={links[index]}>{label}</Link></li>
                )}
                
            </ul>
        )}
    </div>
    );
}