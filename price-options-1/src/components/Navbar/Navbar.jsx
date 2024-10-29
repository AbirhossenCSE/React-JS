import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const routes = [{ id: 1, path: "/", name: "Home" },
         { id: 2, path: "/about", name: "About" }, 
         { id: 3, path: "/contact", name: "Contact" }, 
         { id: 4, path: "/services", name: "Services" }, 
         { id: 5, path: "/profile", name: "Profile" }];


    return (
        <div>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdMenu className="text-2xl"></IoMdMenu> : <IoMdClose></IoMdClose>
                }
                
            </div>
            <ul className="flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </div>
    );
};

export default Navbar;