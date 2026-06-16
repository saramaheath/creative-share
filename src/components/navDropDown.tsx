"use client";



export default function NavDropDown(props: {isOpen : boolean}){
    const labels = ['Home', 'My Profile', 'Community', 'Sign Out'];
    const links = ['/', '/profile-page', '/community', '/auth/logout'];

    return (
    <div className="max-width-sm cursor-pointer flex justify-end">
        {props.isOpen && (
            <ul className="absolute z-50 rounded-sm background-plight w-[200px]">
                {labels.map((label, index)=>
                    <li key={index} className="px-4 py-2 background-plight rounded-sm nav-link border border-1">
                        <a href={links[index]}>{label}</a>
                        </li>
                )}
                
            </ul>
        )}
    </div>
    );
}