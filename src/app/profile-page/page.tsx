import Nav from "@/components/nav";
import ProfPic from "@/app/profile-page/profPic";
import TabsSection from "@/app/profile-page/tabsSection";
import CommunityAlerts from "@/components/communityAlerts";
import { Post } from "../../database/types";

export default function UserProfile(props: { user: any, posts: Post[]}) {

    return (
    <>
        <Nav></Nav>
        <div className="flex flex-col">
            <ProfPic userName={props.user.username} userImg={props.user.profile_img}></ProfPic>
            <div className="flex">
                <div className="p-2 flex flex-col section-pwhite rounded-md w-1/4 mr-0 ml-4 my-4">
                    <CommunityAlerts></CommunityAlerts>
                </div>
                <div className="flex flex-col w-full">
                    <TabsSection userName={props.user.username} posts={props.posts}></TabsSection>
                </div>
            </div>
        </div>
    </>
    );
}