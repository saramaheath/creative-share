"use client";
import { useState } from "react";
import Image from "next/image";

export default function Project(props: {projImg: string}){

    return (
        <div className="">
            <h3 className="justify-self-center">Project Title</h3>
            <img src={props.projImg} className="m-4 w-96 rounded-md justify-self-center"/>
        </div>
    )
}