"use client";
import { useState } from "react";
import Image from "next/image";
import Projects from "@/app/profile-page/[user_id]/projects";

export default function TabsSection(props: {userName: string}){
const [tabsStatus, setTabsStatus] = useState({'Projects': 'active-tab', 'Posts': 'inactive-tab', 'About Me': 'inactive-tab'});
const tabs = ['Projects', 'Posts', 'About Me'];
const activeStyles = "p-2 m-2 cursor-pointer border-x-2 border-t-2 rounded-t-md border-pdark";
const inactiveStyles = "p-2 m-2 cursor-pointer border-x-2 border-t-2 rounded-t-md border-pdark";


    return (
        <div className="p-2 flex flex-col section-pwhite rounded-md w-3/4 m-8 shadow-lg shadow-black">
            <div className="grid grid-cols-3 border-b-2 ">
                {tabs.map((tab, index) =>
                    <div key={index} className={activeStyles}>{tab}</div>
                )}
            </div>
            <Projects></Projects>
        </div>
    )
}