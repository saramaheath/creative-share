import Nav from "@/components/nav";
import ProfPic from "@/app/profile-page/[user_id]/profPic";
import TabsSection from "@/app/profile-page/[user_id]/tabsSection";
import CommunityAlerts from "@/components/communityAlerts";


export default function UserProfile(){

    return (
    <>
        <Nav></Nav>
        <div className="flex flex-col">
            <ProfPic userName="Swigswam"></ProfPic>
            <div className="flex">
                <div className="p-2 flex flex-col section-pwhite rounded-sm w-1/4 mr-0 ml-4 my-4">
                    <CommunityAlerts></CommunityAlerts>
                </div>
                <div className="flex flex-col w-full">
                    <TabsSection userName="Swigswam"></TabsSection>
                </div>
            </div>
        </div>
    </>
    );
}