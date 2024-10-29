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
        <nav className="text-black p-6 bg-yellow-300">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose></IoMdClose> : <IoMdMenu className="text-2xl"></IoMdMenu>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static  p-4 ${open ? 'top-16' : '-top-60' }`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;