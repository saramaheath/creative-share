"use client";
import { useState } from "react";
import CreatePostForm from "@/components/CreatePostForm";
import UserPost from "@/components/userPost";
import { Post } from "../../database/types";

export default function Posts( props: { posts: Post[] }){

    return (
        <div className="p-2 mx-4 mb-4 flex flex-col section-pwhite">
            <CreatePostForm/>
            <div className="m-8 flex flex-col gap-6">
                {props.posts.map((post) =>
                    <UserPost key={post.id} post={post}></UserPost>
                )}
            </div>
        </div>
    )
}