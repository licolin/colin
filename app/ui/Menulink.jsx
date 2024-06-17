"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
const MenuLink = ({item,expanded}) => {
    const pathname = usePathname()


    console.log(pathname)

    return (<Link href={item.path} className={`flex items-center p-2 gap-2 hover:bg-blue-200 rounded-md ${
        pathname === item.path ? "bg-blue-500 rounded-md" : ""
    }`}>
        <span>{item.icon}</span>
        <span className={`whitespace-nowrap text-sm transition-opacity duration-1000 ease-in-out ${
            expanded ? "opacity-100" : "opacity-0"
        }`}>
                {item.title}
            </span>
    </Link>)
}

export default MenuLink;