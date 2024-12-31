"use client";
import { useState } from "react";


export default function NavDropDown(props: {isOpen : boolean}){

    return (
    <div className="max-width-sm cursor-pointer flex justify-end">
        {props.isOpen && (
            <ul className="p-4 absolute z-50">
                <li className="p-2">My Profile</li>
                <li className="p-2">Sign Out</li>
                <li className="p-2">Community</li>
            </ul>
        )}
    </div>
    );
}