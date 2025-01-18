"use client";
import { useState } from "react";
import Image from "next/image";
import Post from "@/components/post";

export default function Posts(){
    const posts = ['Post', 'Post', 'Post', 'Post'];

    return (
        <div className="p-2 mx-4 mb-4 flex flex-col section-pwhite border-x border-b rounded-b-md border-pdark">
            <div className="grid grid-rows-4 m-8">
                {posts.map((post, index) =>
                    <Post key={index}></Post>
                )}
            </div>
        </div>
    )
}