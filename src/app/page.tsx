import Nav from "@/components/nav";
import Search from "@/components/search";
import { createUser, findUserById } from "@/database/UserRepo";
import { findUserByEmail } from "@/database/UserRepo";
import { auth0 } from "@/app/lib/auth0";
import Image from "next/image";
import { NewUser } from "@/database/types";

export default async function Home(){
    const session = await auth0.getSession();
    
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

    const userEmail = session.user?.email != undefined ? session.user.email : '';
    let currUser = userEmail ? await findUserByEmail(userEmail) : null;

    if (!currUser) {
        //create user in db if not found
        const userFirstName = session.user?.name ? session.user.name.split(' ')[0] : '';
        const userLastName = session.user?.name ? session.user.name.split(' ')[1] : '';

        const newUser: NewUser = {
            user_name: session.user?.nickname || '',
            first_name: userFirstName,
            last_name: userLastName,
            gender: '',
            email: userEmail,
            password: '', // No password since we're using Auth0 for authentication
            profile_img: session.user?.picture || '',
            city: null,
            state: null,
            country: null,
        }

        currUser = await createUser(newUser);

    }

    return (
    <>
        <Nav></Nav>
        <h1>Welcome, {currUser?.user_name}!</h1>
        <Search type={"Community"}></Search>
    </>
    )
}