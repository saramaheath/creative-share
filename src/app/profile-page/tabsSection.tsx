"use client";
import { useState } from "react";
import Projects from "@/app/profile-page/projects";
import Posts from "./posts";
import AboutMe from "./aboutMe";
import { Post, Project } from "../../database/types";

export default function TabsSection(props: { userName: string, posts: Post[], projects: Project[] }){
const [activeTab, setActiveTab] = useState('Projects');
const { userName } = props;
const tabs = ['Projects', 'Posts', 'About Me'];
const activeStyles = "p-2 mx-4 mt-4 mb-0 cursor-pointer border-b-4 border-accent-light text-lg font-semibold";
const inactiveStyles = activeStyles.replace('border-b', 'border-none');

function tabSwitch(evt: React.MouseEvent<HTMLDivElement>){
    setActiveTab(evt.currentTarget.textContent ?? 'Projects');
}
    return (
        <div className="p-2 flex flex-col section-pwhite rounded-md mx-4 my-4">
            <div className="grid grid-cols-3">
                {tabs.map((tab, index) =>
                    <div key={index} onClick={tabSwitch} className={activeTab === tab ? activeStyles : inactiveStyles}>{tab}</div>
                )}
            </div>
            {activeTab === 'Projects' && (<Projects projects={props.projects}></Projects>)}
            {activeTab === 'Posts' && (<Posts posts={props.posts}></Posts>)}
            {activeTab === 'About Me' && (<AboutMe></AboutMe>)}
            
        </div>
    )
}