import Nav from "@/components/nav";
import Search from "@/components/search";
import { getCurrentUser } from "../lib/auth/get-current-user";
import { getPostsByUserId } from "@/database/PostRepo";
import Image from "next/image";
import { redirect } from 'next/navigation';
import UserProfile from "./profile-page/page";
import { Post, Project } from "../database/types";
import { getAllUserProjects } from "@/database/ProjectRepo";


export default async function Home(){
    const currUser = await getCurrentUser();
    
    if (!currUser) {
        return (
          <main>
            <div className="p-4 max-w-m mx-auto background-pdark flex justify-between nav-container">
                <Image src="/cs_pixel_title_dark.png" width={384} height={57} alt="creative-share-logo" className="nav-img"></Image>
            </div>
            <a href="/auth/login?screen_hint=signup">Sign up</a>
            <a href="/auth/login">Log in</a>
          </main>
        )
    }

    if (currUser) {
        const posts: Post[] = await getPostsByUserId(currUser.id);
        const projects: Project[] = await getAllUserProjects(currUser.id);

        return (<UserProfile user={currUser} posts={posts} projects={projects}></UserProfile>);
    }

    return (
    <>
        <Nav></Nav>
        <Search type={"Community"}></Search>
    </>
    )
}