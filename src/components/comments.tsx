"use client";
import { useState } from "react";
import Image from "next/image";

export default function Comments(){
    const comments = ['Comment', 'Comment', 'Comment', 'Comment'];

    return (
        <div className="p-2 mx-4 mb-4 flex flex-col section-pwhite border-x-2 border-b-2 rounded-b-md border-pdark">
            <div className="grid grid-rows-4 m-8">
                {comments.map((comment, index) =>
                    <div key={index}>{comment}</div>
                )}
            </div>
        </div>
    )
}