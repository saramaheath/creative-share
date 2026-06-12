"use client";
import { useUser } from '@auth0/nextjs-auth0';

export default function ProfPic(props: {userName: string}){
    const { user, isLoading } = useUser();
    
    if (isLoading) return <div>Loading...</div>

    return (
        <div className="">
            <div className="p-2 flex flex-row items-center section-pwhite mx-4 mt-4 rounded-sm">
                <img src={user?.picture} alt="profile-pic" className="p-2 size-36 rounded-md"></img>
                <div className="p-2">
                    <h2 className="font-extrabold text-xl">{props.userName}</h2>
                    <div className="grid grid-cols-1 gap-2">
                        <p className="text-xs">Chicago, IL United States</p>
                        <div>
                            <p className="font-semibold text-xs">Current Project</p>
                            <p className="text-xs"><a>Untitled</a></p>
                        </div>
                        <div>
                            <p className="font-semibold text-xs">Favorite Mediums</p>
                            <p className="text-xs">Mosaic, Ink, Digital, Paint</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}