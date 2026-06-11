"use client";

export default function Comment(){
    
    return (
        <div className="p-2">
            <div className="flex flex-row mb-2">
                <p className="text-xs font-semibold">SixTeeth</p>
                <p className="text-xs font-normal pl-2">1 month ago</p>
            </div>
           <p className="text-xs font-normal mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
           <div className="flex flex-row justify-between">
            <div className="m-2 p-2 rounded-sm cursor-pointer text-center text-xs w-1/4 custom-button">
                <span className="p-2">Reply</span>
            </div>
            <div className="m-2 p-2 rounded-sm cursor-pointer text-center text-xs w-1/4 custom-button">
                <span className="p-2">Delete</span>
            </div>
           </div>
        </div>
        
    )
}