"use client";
import { useState } from "react";
import Image from "next/image";
import Comment from "./comment";
import CommunityAlert from "./commlunityAlert";

export default function CommunityAlerts(){
    const alerts = ['Mosaic Meetup - Midwest', 'New For Sale Items Listed', 'Gallery Night - March 2025', 'New Community Group - Arcrylic on Canvas'];

    return (
        <div className="px-2 py-4">
            <div className="font-bold">Community Alerts</div>
            <div className=" flex flex-col">
            <div className="">
                {alerts.map((alert, index) =>
                    <CommunityAlert key={index} alertText={alert}></CommunityAlert>
                )}
            </div>
            
        </div>
        </div>
        
    )
}