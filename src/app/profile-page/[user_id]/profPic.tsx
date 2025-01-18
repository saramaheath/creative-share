"use client";
import Image from "next/image";

export default function ProfPic(props: {userName: string}){
    return (
        <div className="p-2 flex flex-col section-pwhite rounded-md w-1/4 mr-0 ml-8 my-8 shadow-lg shadow-black">
            <div className="p-2 flex flex-row">
                <img src="/person_placeholder.png" alt="profile-pic" className="p-2 size-36 rounded-md"></img>
                <div className="p-2">
                    <h2 className="font-extrabold text-lg">{props.userName}</h2>
                    <div className="grid grid-cols-1 content-between">
                        <p className="font-light text-sm">Chicago, IL United States</p>
                        <p className="font-light text-xs">Last updated 12/21/2024</p>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <p className="font-semibold text-sm">Current Project</p>
                <p className="font-light text-sm"><a>Untitled</a></p>
                <p className="font-semibold text-sm">Favorite Mediums</p>
                <p className="font-light text-sm">Mosaic, Ink, Digital, Paint</p>
                <p className="font-semibold text-sm"><a>Work for sale</a></p>
            </div>
        </div>
    )
}