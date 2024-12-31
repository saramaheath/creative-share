export default function Search(props: {type : string}){

    let searchText = `Search ${props.type[0].toUpperCase() + props.type.slice(1)}`;

    return (
    <div className="flex items-center justify-center w-full h-96">
        <label hidden>Search Bar</label>
        <input type="text" placeholder={searchText} className="flex h-10 w-4/5 rounded-md border border-input px-3 py-2 text-sm"></input>
    </div>
    );
}