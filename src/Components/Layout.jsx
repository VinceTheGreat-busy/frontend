import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";

export default function Layout() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Header />

            <div>
                <aside>
                    <Sidebar
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </aside>

                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}