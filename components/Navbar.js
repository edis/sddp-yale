import Link from "next/link";
import {useEffect, useState} from "react";

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        if (isSmall) {
            if (isOpen) {
                const menu = document.querySelector('.menu-list-hamburger')
                menu.style.display = "block";
            } else {
                const menu = document.querySelector('.menu-list-hamburger')
                menu.style.display = "none";
            }
        }
    }, [isSmall, isOpen])

    return (
        <nav>
            <div className={"nav"}>
            <div>
                <Link href={"/"}><a><img className={"logo"} alt={"SDDP Logo"} draggable={"false"} src={"/static/sddp-logo.png"} /></a></Link>
            </div>
            <div>
                <ul className={"menu-list"}>
                    <li className={"menu-list-item"}><Link href={"/"}><a className={"link"}>Home</a></Link></li>
                    <li className={"menu-list-item"}><Link href={"/team"}><a className={"link"}>Our Team</a></Link></li>
                    <li className={"menu-list-item"}><Link href={"/announcements"}><a className={"link"}>Announcements</a></Link></li>
                    <li className={"menu-list-item"}><Link href={"/pamphlets"}><a className={"link"}>Pamphlets</a></Link></li>
                </ul>
            </div>
            <div className={"hamburger"}>
                <button onClick={() => {
                    setIsSmall(true)
                    setisOpen(!isOpen)
                }}>
                    <img src={"/static/menu.svg"} width={40} height={40} />
                </button>
            </div>
            </div>
            {/*<div>*/}
                <ul className={"menu-list-hamburger"} style={{display: "hidden"}}>
                    <li className={"menu-list-item"} onClick={() => setisOpen(false)}><Link href={"/"}><a className={"link"}>Home</a></Link></li>
                    <li className={"menu-list-item"} onClick={() => setisOpen(false)}><Link href={"/team"}><a className={"link"}>Our Team</a></Link></li>
                    <li className={"menu-list-item"} onClick={() => setisOpen(false)}><Link href={"/announcements"}><a className={"link"}>Announcements</a></Link></li>
                    <li className={"menu-list-item"} onClick={() => setisOpen(false)}><Link href={"/pamphlets"}><a className={"link"}>Pamphlets</a></Link></li>
                </ul>
            {/*</div>*/}

        </nav>
    )
}

export default Navbar;
