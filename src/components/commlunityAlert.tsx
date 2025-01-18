"use client";
import { useState } from "react";
import Image from "next/image";
import Comment from "./comment";

export default function CommunityAlert(props: {alertText: string}){
    

    return (
        <div className="py-2">
            <a className="text-sky-600 cursor-pointer hover:text-sky-400">{props.alertText}</a>
        </div>
        
    )
}