"use client";
import { useState } from "react";
import Project from "./project";
import Image from "next/image";

export default function Projects(){
    const [projectView, setProjectView] = useState('multi');
    const [currProjImg, setCurrProjImg] = useState('');
    const projects = ['/dragonmosaic.jpg', '/sample_proj_img.jpg', '/mushroom_rainbow.jpg', '/magic_cat.JPG', '/lemongrab_clay.JPG', '/pig_hat_man.jpg', '/paint_wb.JPG', '/ink_cat.jpg'];

    function displayProject(evt:any){
        setCurrProjImg(evt.target.src);
        setProjectView('single');
    }

    function displayAllProjects(){
        setProjectView('multi');
    }

    return (
        <div className="p-2 mx-4 mb-4 flex flex-col section-pwhite border-x border-b rounded-b-md border-pdark">
            {projectView === 'multi' && (
                <div className="grid grid-cols-4 gap-4 m-8">
                    {projects.map((img, index) =>
                        <img key={index} src={img} onClick={displayProject} alt="project-image" className="object-cover size-64 rounded-md cursor-pointer hover:opacity-50"/>
                    )}
            </div>
            )}
            {projectView === 'single' && (
                <div className="flex flex-col">
                    <div onClick={displayAllProjects} className="p-2 m-2 border rounded-md border-pdark cursor-pointer text-center text-xs w-1/4 float-right bg-slate-500 text-white hover:bg-slate-400"> Back to Projects</div>
                    <Project projImg={currProjImg}></Project>
                </div>
                )}
        </div>
    )
}