import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link href={"/"}><a><img className={"logo"} alt={"SDDP Logo"} draggable={"false"} src={"/static/sddp-logo.png"} /></a></Link>
            </div>
            <div>
                <ul className={"menu-list"}>
                    <li className={"menu-list-item"}><Link href={"/"}><a className={"link"}>Home</a></Link></li>
                    <li className={"menu-list-item"}><Link href={"/team"}><a className={"link"}>Our Team</a></Link></li>
                    <li className={"menu-list-item"}><Link href={"/announcements"}><a className={"link"}>Announcements</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
