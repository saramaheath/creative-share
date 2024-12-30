import NavDropDown from '@/components/navDropDown';

export default function Nav(){
    return (
    <div className="p-4 max-w-m mx-auto bg-white rounded-xl shadow-md flex ">
        <h3 className="flex-1">Creative Share</h3>
        <NavDropDown></NavDropDown>
    </div>
    );
}