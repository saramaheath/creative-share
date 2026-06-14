"use client";
import { useState } from "react";
import Comments from "./comments";
import CommentsSolidIcon from '@iconify-react/stash/comments-solid';

export default function Post(){
    const [showComments, setShowComments] = useState(false);
        
    function toggleShowComments(){
        setShowComments(!showComments);
    }

    return (
    <div className="flex flex-col w-full">
        <h3 className="p-4 mx-4 background-xlight rounded-t-md">Post Title</h3>       
        <p className="p-4 mx-4 background-xlight" >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
        <div className="pt-2 pb-4 px-4 mx-4 background-xlight rounded-b-md" onClick={toggleShowComments}>
                <CommentsSolidIcon className="cursor-pointer custom-icon float-right" height="3em" />
        </div>
            {showComments && (
                <Comments></Comments>
            )}
    </div>
    );
}