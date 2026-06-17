"use client";
import { useState } from "react";
import UserProject from "./userProject";
import CreateProjectForm from "@/components/CreateProjectForm"
import { Project } from "../../database/types";

export default function Projects(props: { projects: Project[] }){
    const [projectView, setProjectView] = useState('multi');
    const [currProjImg, setCurrProjImg] = useState('');

    function displayProject(evt: React.MouseEvent<HTMLImageElement>){
        setCurrProjImg(evt.currentTarget.src);
        setProjectView('single');
    }

    function displayAllProjects(){
        setProjectView('multi');
    }

    return (
        <div className="p-2 mx-4 flex flex-col section-pwhite">
            {projectView === 'multi' && (
                <div>
                <CreateProjectForm/>
                <div className="grid grid-cols-4 gap-4 m-8">
                    {props.projects.map((project) =>
                        <img key={project.id} src={project.main_img} onClick={displayProject} alt="project-image" className="object-cover rounded-md size-64 cursor-pointer card-hover"/>
                    )}
                </div>
            </div>
            )}
            {projectView === 'single' && (
                <div className="flex flex-col">
                    <div onClick={displayAllProjects} className="p-2 border border-pdark cursor-pointer text-center text-xs w-1/4 float-right bg-slate-500 text-white hover:button-background-hover"> Back to Projects</div>
                    <UserProject projImg={currProjImg}></UserProject>
                </div>
                )}
        </div>
    )
}