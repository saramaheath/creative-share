import { auth0 } from "@/lib/auth0";
import { createUser, findUserById } from "@/database/UserRepo";
import { findUserByEmail } from "@/database/UserRepo";
import { NewUser } from "@/database/types";

export async function getCurrentUser() {
    const session = await auth0.getSession();
    
    if (!session) {
        return null;
    }

    const userEmail = session.user?.email != undefined ? session.user.email : '';
    let currUser = userEmail ? await findUserByEmail(userEmail) : null;

    if (!currUser) {
        //create user in db if not found
        const userFirstName = session.user?.name ? session.user.name.split(' ')[0] : '';
        const userLastName = session.user?.name ? session.user.name.split(' ')[1] : '';

        const newUser: NewUser = {
            username: session.user?.nickname || '',
            username_display: session.user?.nickname || '',
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
    
    return currUser;
}