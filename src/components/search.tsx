export default function Search(){
    return (
    <div className="flex items-center justify-center w-full h-96">
        <label hidden>Search Bar</label>
        <input type="text" placeholder="Search" className="flex h-10 w-4/5 rounded-md border border-input px-3 py-2 text-sm"></input>
    </div>
    );
}