"use client";
import Image from "next/image";

export default function ProfPic(props: {userName: string}){
    return (
        <div className="p-2 flex flex-col">
            <div className="p-2 flex flex-row">
                <img src="/person_placeholder.png" alt="profile-pic" className="p-2 size-24"></img>
                <div className="p-2">
                    <h2>{props.userName}</h2>
                    <p>Current Medium: Mosaic</p>
                    <p>Chicago, IL United States</p>
                </div>
            </div>
            <div className="p-2">
                <p>Current Project: <a>Untitled</a></p>
                <p>Other Mediums: Ink, Digital, Paint</p>
                <p><a>Work for sale</a></p>
            </div>
        </div>
    )
}