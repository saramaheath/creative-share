import Comments from "./comments";

export default function Post(){

    return (
    <div className="flex-column w-full h-96">
        <h3 className="py-2 mx-4">Post Title</h3>       
        <p className="py-2 mx-4" >post content</p>
        <Comments></Comments>
    </div>
    );
}