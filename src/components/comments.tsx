"use client";
import { useState } from "react";
import Image from "next/image";

export default function Comments(){
    const comments = ['Comment', 'Comment', 'Comment', 'Comment'];

    return (
        <div className="py-2 mx-4 mb-2">
            <div className="p-2 border-x border-t rounded-t-md border-pdark">Comments</div>
            <div className="p-2 flex flex-col section-pwhite border-x border-y rounded-b-md border-pdark">
            <div className="grid grid-rows-4 m-8">
                {comments.map((comment, index) =>
                    <div key={index}>{comment}</div>
                )}
            </div>
        </div>
        </div>
        
    )
}