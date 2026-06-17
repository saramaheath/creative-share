'use client';

import { createProjectAction } from "@/app/actions/projects";

export default function CreateProjectForm(){
     return (
    <form action={createProjectAction}>
        <div className="background-accent-lightest p-4 mx-4 mt-4 rounded-md">
            <div className="col-span-full pb-2">
                <div>
                    <div className="flex items-center rounded-md">
                    <input id="title" type="text" name="title" placeholder="Post Title" className="w-full rounded-md py-1.5 px-3" />
                    </div>
                </div>
            </div>
            <div className="col-span-full">
                <div>
                    <div className="flex items-center rounded-md">
                    <input id="medium" type="text" name="medium" placeholder="Project Medium" className="w-full rounded-md py-1.5 px-3" />
                    </div>
                </div>
            </div>
            <div className="col-span-full pt-2">
                <div>
                    <div className="flex items-center rounded-md">
                    <input id="main_img" type="file" name="main_img" placeholder="Upload Project Image" className="w-full rounded-md py-1.5 px-3" />
                    </div>
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