import { Link } from "react-router-dom";
import {
    House,
    LayoutDashboard,
    ShoppingBag,
    ShoppingCart,
    User,
    ChevronLeft,
} from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {

    const links = [
        {
            name: "Home",
            path: "/",
            icon: House,
        },
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Products",
            path: "/products",
            icon: ShoppingBag,
        },
        {
            name: "Orders",
            path: "/orders",
            icon: ShoppingCart,
        },
        {
            name: "Profile",
            path: "/profile",
            icon: User,
        },
    ];

    return (
        <aside
            className={`
                h-screen
                bg-white
                border-r
                transition-all
                duration-300
                ${isOpen ? "w-64" : "w-20"}
            `}
        >
            {/* Toggle */}
            <div className="flex justify-end p-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <ChevronLeft
                        className={`
                            transition-transform
                            duration-300
                            ${!isOpen ? "rotate-180" : ""}
                        `}
                    />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 px-3">

                {links.map((link) => {
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`
                                flex
                                items-center
                                gap-3
                                rounded-lg
                                p-3
                                hover:bg-gray-100
                                transition
                                ${!isOpen ? "justify-center" : ""}
                            `}
                        >
                            <Icon size={22} />

                            {isOpen && (
                                <span>
                                    {link.name}
                                </span>
                            )}
                        </Link>
                    );
                })}

            </nav>
        </aside>
    );
}