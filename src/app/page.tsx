import Nav from "@/components/nav";
import Search from "@/components/search";
import { findUserById } from "@/database/UserRepo";
import { auth0 } from "@/app/lib/auth0";
import Image from "next/image";

export default async function Home(){
    const session = await auth0.getSession();
    const currUser = await findUserById(1);
    
    if (!session) {
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

    return (
    <>
        <Nav></Nav>
        <h1>Welcome, {session.user.name}</h1>
        <Search type={"Community"}></Search>
    </>
    )
}