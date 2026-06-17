"use client";

export default function UserProject(props: {projImg: string}){

    return (
        <div className="">
            <h3 className="justify-self-center">Project Title</h3>
            <img src={props.projImg} className="m-4 w-96 rounded-md justify-self-center"/>
        </div>
    )
}