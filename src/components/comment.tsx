"use client";
import TrashCanIcon from '@iconify-react/stash/trash-can';
import ArrowReplySolidIcon from '@iconify-react/stash/arrow-reply-solid';

export default function Comment(){
    
    return (
        <div className="p-4 rounded-md background-accent-lightest mb-4">
            <div className="flex flex-row mb-2">
                <p className="text-xs font-semibold">SixTeeth</p>
                <p className="text-xs font-normal pl-2">1 month ago</p>
            </div>
           <p className="text-xs font-normal mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
           <div className="flex flex-row justify-end">
            <div className="mx-2 mt-2 mb-0 cursor-pointer">
                <ArrowReplySolidIcon className="cursor-pointer custom-icon" height="24" />
            </div>
            <div className="mx-2 mt-2 mb-0 cursor-pointer">
                <TrashCanIcon className="cursor-pointer custom-icon" height="24" />
                
            </div>
           </div>
        </div>
    )
}