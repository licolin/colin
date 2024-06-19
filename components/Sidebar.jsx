"use client";
import {
    MdShoppingBag,
    MdPeople,
} from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";

import MenuLink from "./Menulink";
import {useState} from "react";

const menuItems = [
    {
        title: "me",
        list: [
            {
                title: "me",
                path: "/me",
                icon: <MdPeople/>,
            },
        ],
    },
    {
        title: "blog",
        list: [
            {
                title: "blog",
                path: "/about",
                icon: <GrDocumentStore/>,
            }
        ],
    }
];


const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false); // State to track sidebar expansion

    const handleMouseEnter = () => setIsExpanded(true);
    const handleMouseLeave = () => setIsExpanded(false);

    return (
        <div
            className={`fixed h-dvh transition-all duration-1000 ease-in-out bg-blue-600 p-2 z-20 ${
                isExpanded ? 'w-60' : 'w-14'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ul className="list-none">
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        {/*<span className="font-bold text-xs my-16 mx-0">{isExpanded ? cat.title : ""}</span>*/}
                        <span className= {`font-bold text-xs my-16 mx-0 transition-opacity duration-1000 ease-in-out ${
                            isExpanded ? "opacity-100" : "opacity-0"
                        }`}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} expanded={isExpanded}/>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;