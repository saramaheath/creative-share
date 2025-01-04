"use client";
import { useState } from "react";
import Image from "next/image";

export default function Projects(){
    const projects = ['/sample_proj_img.jpg', '/sample_proj_img.jpg', '/sample_proj_img.jpg', '/sample_proj_img.jpg'];

    return (
        <div className="p-2 mx-2 flex flex-col section-pwhite border-x-2 border-b-2 rounded-b-md border-pdark">
            <div className="grid grid-cols-4 m-8">
                {projects.map((img, index) =>
                    <img key={index} src={img} alt="project-image" className="size-24 rounded-md m-2"/>
                )}
            </div>
        </div>
    )
}