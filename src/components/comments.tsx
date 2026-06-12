"use client";
import Comment from "./comment";

export default function Comments(){
    const comments = ['Comment', 'Comment', 'Comment', 'Comment'];

    return (
        <div className="mx-4 mb-2 flex justify-end">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="p-2 flex flex-col section-pwhite">
                    <div className="m-8 grid grid-cols-1 gap-4">
                        {comments.map((comment, index) =>
                            <Comment key={index}></Comment>
                        )}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="button" className="p-2 m-2 cursor-pointer text-center text-xs w-1/4 custom-button">Add Comment</button>
                </div>
            </div>
        </div>
    )
}