import Nav from "@/components/nav";
import ProfPic from "@/app/profile-page/[user_id]/profPic";

export default function UserProfile(){

    return (
    <>
        <Nav></Nav>
        <ProfPic userName="Swigswam"></ProfPic>
    </>
    );
}