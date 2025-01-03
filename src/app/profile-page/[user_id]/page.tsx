import Nav from "@/components/nav";
import ProfPic from "@/app/profile-page/[user_id]/profPic";
import TabsSection from "@/app/profile-page/[user_id]/tabsSection";


export default function UserProfile(){

    return (
    <>
        <Nav></Nav>
        <div className="flex">
            <ProfPic userName="Swigswam"></ProfPic>
            <TabsSection userName="Swigswam"></TabsSection>
        </div>
    </>
    );
}