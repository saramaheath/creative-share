import Nav from "@/components/nav";
import ProfPic from "@/app/profile-page/[user_id]/profPic";
import TabsSection from "@/app/profile-page/[user_id]/tabsSection";
import CommunityAlerts from "@/components/communityAlerts";


export default function UserProfile(){

    return (
    <>
        <Nav></Nav>
        <div className="flex">
            <div className="p-2 flex flex-col section-pwhite rounded-md w-1/4 mr-0 ml-8 my-8 shadow-lg shadow-black">
                <ProfPic userName="Swigswam"></ProfPic>
                <CommunityAlerts></CommunityAlerts>
            </div>
            <TabsSection userName="Swigswam"></TabsSection>
        </div>
    </>
    );
}