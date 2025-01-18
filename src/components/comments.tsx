"use client";
import { useState } from "react";
import Image from "next/image";
import Comment from "./comment";

export default function Comments(){
    const comments = ['Comment', 'Comment', 'Comment', 'Comment'];

    return (
        <div className="py-2 mx-4 mb-2">
            <div className="p-2 border-x border-t rounded-t-md border-pdark">Comments</div>
            <div className="p-2 flex flex-col section-pwhite border-x border-y rounded-b-md border-pdark">
            <div className="grid grid-rows-4 m-8">
                {comments.map((comment, index) =>
                    <Comment key={index}></Comment>
                )}
            </div>
            <div>
            <div className="p-2 m-2 border rounded-md border-pdark cursor-pointer text-center text-xs w-1/4 float-right bg-slate-500 text-white hover:bg-slate-400"> Add Comment</div>
            </div>
        </div>
        </div>
        
    )
}