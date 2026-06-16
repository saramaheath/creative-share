"use client";
import { useState } from "react";
import Comments from "./comments";
import CommentsSolidIcon from '@iconify-react/stash/comments-solid';
import { Post } from "../database/types";

export default function UserPost(props: { post: Post}){
    const [showComments, setShowComments] = useState(false);
        
    function toggleShowComments(){
        setShowComments(!showComments);
    }

    return (
    <div className="flex flex-col w-full">
        <h3 className="p-4 mx-4 background-xlight rounded-t-md">{props.post.title}</h3>       
        <p className="p-4 mx-4 background-xlight">{props.post.text}</p>
        <div className="pt-2 pb-4 px-4 mx-4 background-xlight rounded-b-md" onClick={toggleShowComments}>
                <CommentsSolidIcon className="cursor-pointer custom-icon float-right" height="3em" />
        </div>
            {showComments && (
                <Comments></Comments>
            )}
    </div>
    );
}