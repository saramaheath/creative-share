"use client";
import Post from "@/components/post";

export default function Posts(){
    const posts = ['Post', 'Post', 'Post', 'Post'];

    return (
        <div className="p-2 mx-4 mb-4 flex flex-col section-pwhite">
            <div className="m-8 flex flex-col gap-6">
                {posts.map((post, index) =>
                    <Post key={index}></Post>
                )}
            </div>
        </div>
    )
}