"use client";
import { useState } from "react";
import Image from "next/image";

export default function Posts(){
    const posts = ['Post', 'Post', 'Post', 'Post'];

    return (
        <div className="p-2 mx-2 flex flex-col section-pwhite border-x-2 border-b-2 rounded-b-md border-pdark">
            <div className="grid grid-cols-4 m-8">
                {posts.map((post, index) =>
                    <div key={index}>{post}</div>
                )}
            </div>
        </div>
    )
}