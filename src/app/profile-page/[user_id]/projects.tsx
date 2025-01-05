"use client";
import { useState } from "react";
import Project from "./project";
import Image from "next/image";

export default function Projects(){
    const [projectView, setProjectView] = useState('multi');
    const projects = ['/dragonmosaic.jpg', '/sample_proj_img.jpg', '/mushroom_rainbow.jpg', '/magic_cat.JPG', '/lemongrab_clay.JPG', '/pig_hat_man.jpg', '/paint_wb.JPG', '/ink_cat.jpg'];

    function displayProject(evt:any){
        setProjectView('single');
    }

    function displayAllProjects(){
        setProjectView('multi');
    }

    return (
        <div className="p-2 mx-4 mb-4 flex flex-col section-pwhite border-x-2 border-b-2 rounded-b-md border-pdark">
            {projectView === 'multi' && (
                <div className="grid grid-cols-4 gap-4 m-8">
                    {projects.map((img, index) =>
                        <img key={index} src={img} onClick={displayProject} alt="project-image" className="object-cover size-64 rounded-md cursor-pointer hover:opacity-50"/>
                    )}
            </div>
            )}
            {projectView === 'single' && (
                <div className="flex flex-row">
                    <div onClick={displayAllProjects} className="p-2 border-2 rounded-md border-pdark cursor-pointer">Back to Projects</div>
                    <Project></Project>
                </div>
                )}
        </div>
    )
}