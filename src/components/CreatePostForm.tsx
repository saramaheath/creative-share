'use client';

import { createPostAction } from "@/app/actions/posts";

export default function CreatePostForm(){
     return (
    <form action={createPostAction}>
        <div className="background-accent-lightest p-4 mx-4 mt-4 rounded-md">
            <div className="col-span-full">
                <div>
                    <div className="flex items-center rounded-md">
                    <input id="title" type="text" name="title" placeholder="Post Title" className="w-full rounded-md py-1.5 px-3" />
                    </div>
                </div>
            </div>
            <div className="col-span-full">
                <div className="mt-2">
                    <textarea id="text" name="text" placeholder="Post content goes here..." className="field-sizing-content min-h-[200px] max-h-[400px] w-full rounded-md px-3 py-1.5"></textarea>
                </div>
            </div>
            <div className="col-span-full flex justify-end">
                <button type="submit" className="custom-button p-2 rounded-md w-1/4">
                    Save
                </button>
            </div>
        </div>
    </form>
  );
}