"use client";
import React, { useState } from "react";
import Image from "next/image";
import Projects from "@/app/profile-page/[user_id]/projects";
import Posts from "./posts";
import AboutMe from "./aboutMe";

export default function TabsSection(props: {userName: string}){
const [activeTab, setActiveTab] = useState('Projects');
const tabs = ['Projects', 'Posts', 'About Me'];
const activeStyles = "p-2 mx-4 mt-4 mb-0 cursor-pointer border-x-2 border-t-2 rounded-t-md border-pdark";
const inactiveStyles = activeStyles.replace('border-t-2', 'border-y-2');

function tabSwitch(evt:any){
    setActiveTab(evt.target.textContent);
}
    return (
        <div className="p-2 flex flex-col section-pwhite rounded-md w-3/4 mx-8 mt-8 shadow-lg shadow-black">
            <div className="grid grid-cols-3">
                {tabs.map((tab, index) =>
                    <div key={index} onClick={tabSwitch} className={activeTab === tab ? activeStyles : inactiveStyles}>{tab}</div>
                )}
            </div>
            {activeTab === 'Projects' && (<Projects></Projects>)}
            {activeTab === 'Posts' && (<Posts></Posts>)}
            {activeTab === 'About Me' && (<AboutMe></AboutMe>)}
            
        </div>
    )
}