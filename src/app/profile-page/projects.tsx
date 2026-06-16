"use client";
import { useState } from "react";
import Project from "./project";

export default function Projects(){
    const [projectView, setProjectView] = useState('multi');
    const [currProjImg, setCurrProjImg] = useState('');
    const projects = ['/dragonmosaic.jpg', '/sample_proj_img.jpg', '/mushroom_rainbow.jpg', '/magic_cat.JPG', '/lemongrab_clay.JPG', '/pig_hat_man.jpg', '/paint_wb.JPG', '/ink_cat.jpg'];

    function displayProject(evt: React.MouseEvent<HTMLImageElement>){
        setCurrProjImg(evt.currentTarget.src);
        setProjectView('single');
    }

    function displayAllProjects(){
        setProjectView('multi');
    }

    return (
        <div className="p-2 flex flex-col section-pwhite">
            {projectView === 'multi' && (
                <div className="grid grid-cols-4 gap-4 m-8">
                    {projects.map((img, index) =>
                        <img key={index} src={img} onClick={displayProject} alt="project-image" className="object-cover rounded-md size-64 cursor-pointer card-hover"/>
                    )}
            </div>
            )}
            {projectView === 'single' && (
                <div className="flex flex-col">
                    <div onClick={displayAllProjects} className="p-2 border border-pdark cursor-pointer text-center text-xs w-1/4 float-right bg-slate-500 text-white hover:button-background-hover"> Back to Projects</div>
                    <Project projImg={currProjImg}></Project>
                </div>
                )}
        </div>
    )
}