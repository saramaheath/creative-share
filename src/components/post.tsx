import Comments from "./comments";

export default function Post(){

    return (
    <div className="flex items-center justify-center w-full h-96">
        <h3>Post Title</h3>       
        <p>post content</p>
        <Comments></Comments>
    </div>
    );
}